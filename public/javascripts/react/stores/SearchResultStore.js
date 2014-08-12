(function (exports) {
    'use strict';

    // Pattern taken from flux
    var SearchResultStore = {
        CHANGE_EVENT: 'CHANGE_EVENT',
        BASE_URL: '/a/search',

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
            // FIXME
            console.debug(data);
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

        // TODO: For now we will just sort on the client side
        // Should be possible on server at least as an option as well
        sort: function(field, direction, page) {
            console.error("Sort not implemented, yet");
            console.error("Should sort column " + fiel + " on page " + page + " in " + direction + " direction");
        },
        search: function(q) {
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

            var query = {
                q: "*",
                relative: 100
            };

            $.getJSON(this.BASE_URL, query, successCallback);
        }
    };
    util.mergeInto(SearchResultStore, EventEmitter.prototype);

    exports.SearchResultStore = SearchResultStore;

}((typeof exports === 'undefined') ? window : exports));