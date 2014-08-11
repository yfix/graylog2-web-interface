(function (exports) {
    'use strict';

    var defaultFields = ['timestamp', 'source', 'message'];
    var fields = defaultFields.concat(['action']); // FIXME: This additional field just for testing

    // Pattern taken from flux
    var SelectedFieldsStore = {
        CHANGE_EVENT: 'SELECTED_FIELD_STORE_CHANGE_EVENT',
        _fields: fields,
        defaultFields: defaultFields,

        _emitChange: function () {
            this.emit(SelectedFieldsStore.CHANGE_EVENT);
        },

        /**
         * @param {function} callback
         */
        addChangeListener: function (callback) {
            this.on(SelectedFieldsStore.CHANGE_EVENT, callback);
        },

        /**
         * @param {function} callback
         */
        removeChangeListener: function (callback) {
            this.removeListener(SelectedFieldsStore.CHANGE_EVENT, callback);
        },

        getFields: function () {
            return this._fields.slice(); // create a fresh copy for each copy to mess around
        },

        setFields: function (fields) {
            this._fields = fields;
            this._emitChange();
        }
    };
    util.mergeInto(SelectedFieldsStore, EventEmitter.prototype);

    exports.SelectedFieldsStore = SelectedFieldsStore;

}((typeof exports === 'undefined') ? window : exports));