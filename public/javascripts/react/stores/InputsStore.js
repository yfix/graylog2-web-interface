(function (exports) {
    'use strict';

    var BASE_URL = '/a/system/inputs';
    var InputsStore = {
        LIST_TYPES_URL: BASE_URL + '/types',
        _types: {},
        initialized: false,

        getTypes: function () {
            return this._types;
        },

        setTypes: function (types) {
            this._types = types;
            this._emitChange();
        },

        init: function() {
            if (this.initialized) return;
            this.initialized = true;
            var postProcessData = function (data) {
                // turn map into array
                data = Object.keys(data).map(function(type) {
                    return {
                        type: type,
                        name: data[type]
                    };
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
            var failCallback = function ( jqXHR, textStatus, errorThrown) {
                this.initialized = false;
                console.error("Loading of input types failed with status: " + textStatus);
                console.error("Error", errorThrown);
                // TODO: find a better way to signal error
                alert("Could not retrieve list of input types from server - try reloading the page");
            }.bind(this);
            $.getJSON(this.LIST_TYPES_URL, successCallback).fail(failCallback);
        }

    };
    util.mergeInto(InputsStore, AbstractEventSendingStore);

    exports.InputsStore = InputsStore;

}((typeof exports === 'undefined') ? window : exports));