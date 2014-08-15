(function (exports) {
    'use strict';

    var BASE_URL = '/a/system/inputs';
    var InputsStore = {
        CHANGE_EVENT: 'CHANGE_EVENT',
        LIST_TYPES_URL: BASE_URL + '/types',
        GET_TYPES_URL: BASE_URL, // /a/system/inputs/:node_id/type/:input_type
        _types: {},
        initialized: false,

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

        getTypes: function () {
            return this._types;
        },

        setTypes: function (types) {
            this._types = types;
            this._emitChange();
        },

        urlForData: function(data) {
            if (!data.nodeId || !data.inputType) {
                throw new Error("Data needs nodeId and inputType");
            }
            return this.GET_TYPES_URL + "/" + data.nodeId + "/type/" + data.inputType;
        },

        init: function() {
            if (this.initialized) return;
            this.initialized = true;
            var postProcessData = function (data) {
                data = Object.keys(data).map(function(type) {
                    return data[type];
                });
                data = data.sort(function(t1, t2) {
                    return t1.name.localeCompare(t2.name);
                });
                return data;
            };
            var successCallback = function (data) {
                data = postProcessData(data);
                this.setTypes(data);
            }.bind(this);
            // TODO: handle failure and reset initialized flag
            $.getJSON(this.LIST_TYPES_URL, successCallback);
        }

    };
    util.mergeInto(InputsStore, EventEmitter.prototype);

    exports.InputsStore = InputsStore;

}((typeof exports === 'undefined') ? window : exports));