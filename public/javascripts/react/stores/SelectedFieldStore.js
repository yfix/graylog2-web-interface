var SelectedFieldsStore = {
    CHANGE_EVENT: 'SELECTED_FIELD_STORE_CHANGE_EVENT',
    _fields: [],
    defaultFields: ['timestamp', 'source', 'message'],

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
        return this._fields;
    },
    setFields: function (fields) {
        this._fields = fields;
        this._emitChange();
    }
};
util.merge(SelectedFieldsStore, EventEmitter.prototype);
