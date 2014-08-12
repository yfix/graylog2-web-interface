(function (exports) {
    'use strict';

    var defaultFields = ['timestamp', 'source', 'message'];
    var fields = defaultFields.concat(['action']); // FIXME: This additional field just for testing

    // Pattern taken from flux
    var SelectedFieldsStore = {
        CHANGE_EVENT: 'CHANGE_EVENT',
        _fields: fields,
        defaultFields: defaultFields,

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

        getFields: function () {
            return this._fields.slice(); // create a fresh copy for each copy to mess around
        },

        setFields: function (fields) {
            // we need to bring this into the right order to make headers and data match
            // - default fields come first
            // - other fields are sorted in lexical order
            var selectedDefaultFields = this.defaultFields.filter(function(defaultField) {
                return fields.indexOf(defaultField) !== -1;
            });
            var otherSortedFields = fields.filter(function(field) {
                return selectedDefaultFields.indexOf(field) === -1;
            }).sort();
            this._fields = selectedDefaultFields.concat(otherSortedFields);
            this._emitChange();
        }
    };
    util.mergeInto(SelectedFieldsStore, EventEmitter.prototype);

    exports.SelectedFieldsStore = SelectedFieldsStore;

}((typeof exports === 'undefined') ? window : exports));