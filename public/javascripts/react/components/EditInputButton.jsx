/** @jsx React.DOM */

var EditInputButton = React.createClass({
    _onClick: function (event) {
        // TODO: Hack, to identify which input we are editing
        // Required as long as we are still using server side rendering for the list of configured inputs
        var nodeId = $(this.getDOMNode()).parent().attr('data-node-id');
        var inputType = $(this.getDOMNode()).parent().attr('data-input-type');
        InputStore.loadInputData(nodeId, inputType);
    },
    render: function () {
        return (
            <a href="#" onClick={this._onClick}>Edit</a>
        );
    }
});
