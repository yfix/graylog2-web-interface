(function (exports) {
    'use strict';

    // Pattern taken from flux
    var SearchResultStore = {
        CHANGE_EVENT: 'CHANGE_EVENT',
        BASE_URL: '/a/search',

        query: {
            q: "*",
            relative: 300,
            page: 1
        },

        _emitChange: function () {
            this.emit(this.CHANGE_EVENT);
        },

        /**
         * @param {function} callback
         */
        addChangeListener: function (callback) {
            this.on(this.CHANGE_EVENT, callback);
        },

        /**
         * @param {function} callback
         */
        removeChangeListener: function (callback) {
            this.removeListener(this.CHANGE_EVENT, callback);
        },

        getData: function () {
            return this._data || this._emptyResult(); // XXX: This stinks!
        },

        setData: function (data) {
//            console.debug(data);
            this._data = data;
            this._emitChange();
        },

        _emptyResult: function() {
            return {
                messages: [],
                used_indices: [],
                built_query: "{}",
                fields: []
            };
        },

        // TODO
        sort: function(field, direction, page) {
            console.error("Sort not implemented, yet");
            console.error("Should sort column " + fiel + " on page " + page + " in " + direction + " direction");
        },
        search: function() {
            var postProcessData = function (data) {
                data.fields = data.fields.map(function(field) {
                    return field.name;
                });
                return data;
            };
            var successCallback = function (data) {
                data = postProcessData(data);
                this.setData(data);
            }.bind(this);

            $.getJSON(this.BASE_URL, this.query, successCallback);
        }
    };
    util.mergeInto(SearchResultStore, EventEmitter.prototype);

    exports.SearchResultStore = SearchResultStore;

}((typeof exports === 'undefined') ? window : exports));