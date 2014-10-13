'use strict';

var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rm = require('gulp-rimraf');
var rimraf = require('rimraf');
var rev = require('gulp-rev');
var handlebars = require('gulp-compile-handlebars');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var jest = require('gulp-jest');
var debug = require('gulp-debug');
var livereload = require('gulp-livereload');
var config = require('./build.properties');

var handlebarOpts = {
    helpers: {
        assetPath: function (path, context) {
            return [config.assetDir, context.data.root[path]].join('/');
        }
    }
};

var reactOpts = {
    harmony: true,
    stripTypes: true
};

gulp.task('test', function () {
    return gulp.src('src', {read: false})
        //.pipe(debug({verbose: false}))
        .pipe(jest({
            scriptPreprocessor: "<rootDir>/jest-preprocessor.js",
            "rootDir": ".",
            unmockedModulePathPatterns: config.test.unmockedModulePathPatterns,
            testPathIgnorePatterns: [
                "node_modules"
            ],
            moduleFileExtensions: [
                "js",
                "jsx"
            ]
        }));
});

var replaceRev = function (debug, noSync) {
    var manifest;
    if (!debug) {
        manifest = JSON.parse(fs.readFileSync('dist/rev-manifest.json', 'utf8'));
    } else {
        manifest = {
            "app.js":"app.js",
            livereload: !noSync && '<script src="//localhost:35729/livereload.js"></script>'
        };
    }

    return gulp.src(config.scriptTemplatePath)
        .pipe(handlebars(manifest, handlebarOpts))
        .pipe(rename(config.scriptDestinationName))
        .pipe(config.targetDir ? gulp.dest(config.targetDir) : gutil.noop())
        .pipe(gulp.dest(config.deployDir));
};
gulp.task('replace-rev-dev', function() {
    return replaceRev(true);
});
gulp.task('replace-rev-dev-no-sync', function() {
    return replaceRev(true, true);
});
gulp.task('replace-rev-prod', function() {
    return replaceRev(false);
});

gulp.task('clean', function () {
    return gulp.src('dist/*')
        .pipe(rm());
});

gulp.task('clean-target', function (callback) {
    rimraf(config.deployDirJs, callback);
});

gulp.task('prepare-lint', ['clean'], function () {
    return gulp.src('src/**/*.jsx')
        .pipe(react(reactOpts))
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest('dist/jsx'));
});

var lintSrc = ['src/**/*.js', 'dist/jsx/**/*.js', '!src/**/__tests__/**'];

gulp.task('lint', ['prepare-lint'], function () {
    return gulp.src(lintSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('lint-strict', ['prepare-lint'], function () {
    return gulp.src(lintSrc)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jshint.reporter('fail'));
});

function browserifyCall(debug) {
    var b = browserify({
        cache: {}, packageCache: {}, fullPaths: true,
        entries: config.entryPoints,
        extensions: ['.jsx', '.js'],
        "transform": [
            ["reactify", reactOpts]
        ],
        debug: debug
    });
    config.browserifyExcludes && config.browserifyExcludes.forEach(function(exclude) {
        b.exclude(exclude);
        //b.ignore('jquery');
        //b.external('jquery');
    });
    return b;
}

function browserifyIt(debug) {
    return browserifyCall(debug)
        .bundle()
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/'));
}

gulp.task('prod-js', function () {
    return browserifyIt(false);
});

gulp.task('compress', function () {
    return gulp.src('./dist/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('rev', function () {
    return gulp.src('./dist/app.js')
        .pipe(rev())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy-rev', function () {
    return gulp.src(['./dist/app-*.js'])
        .pipe(config.targetDirJs ? gulp.dest(config.targetDirJs) : gutil.noop())
        .pipe(gulp.dest(config.deployDirJs));
});

gulp.task('deploy-prod', function (callback) {
    runSequence('test', 'lint-strict', 'clean-target', 'clean', 'prod-js', 'compress', 'rev', 'replace-rev-prod', 'deploy-rev', callback);
});

gulp.task('prepare-dev', function (callback) {
    runSequence('lint', 'clean-target', 'clean', 'replace-rev-dev', callback);
});

gulp.task('build-test', function (callback) {
    runSequence('clean', 'debug-js', callback);
});

gulp.task('default', ['deploy-prod']);

gulp.task('watch', function () {
    var bundler = watchify(browserifyCall(true));

    bundler.on('update', rebundle);

    function rebundle() {
        gutil.log("Rebundling");
        return bundler.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('app.js'))
            .pipe(gulp.dest('./dist'))
            .pipe(config.targetDirJs ? gulp.dest(config.targetDirJs) : gutil.noop())
            .pipe(gulp.dest(config.deployDirJs))
            .pipe(livereload());
    }

    return rebundle();
});
