(function (exports) {
    'use strict';

    var BASE_URL = '/a/system/inputs';
    var InputStore = {
        GET_TYPES_URL: BASE_URL, // /a/system/inputs/:node_id/type/:input_type

        setInput: function (input) {
            this._input = input;
            this._emitChange();
        },

        getInput: function () {
            return this._input;
        },

        _urlForData: function (data) {
            if (!data.nodeId || !data.inputType) {
                throw new Error("Data " + JSON.stringify(data) + " needs nodeId and inputType");
            }
            return this.GET_TYPES_URL + "/" + data.nodeId + "/type/" + data.inputType;
        },

        loadInputData: function (nodeId, inputType) {
            var data = {
                nodeId: nodeId,
                inputType: inputType
            };
            var url = this._urlForData(data);
            var successCallback = function (data) {
                this.setInput(data);
            }.bind(this);
            var failCallback = function (jqXHR, textStatus, errorThrown) {
                console.error("Loading of input type data (" + JSON.stringify(data) + ") failed with status: " + textStatus);
                console.error("Error", errorThrown);
                alert("Could not retrieve input type data from server - try reloading the page");
            }.bind(this);
            $.getJSON(url, successCallback).fail(failCallback);
        }
    };
    util.mergeInto(InputStore, AbstractEventSendingStore);

    exports.InputStore = InputStore;

}((typeof exports === 'undefined') ? window : exports));