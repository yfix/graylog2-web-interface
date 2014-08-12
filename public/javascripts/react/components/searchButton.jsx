/** @jsx React.DOM */

var SearchButton = React.createClass({
    _onClick: function () {
        // TODO: Submit real query and range here
        SearchResultStore.search('*');
    },
    render: function () {
        return <button type="button" onClick={this._onClick} className="btn btn-success icon-search pull-left"></button>;
    }
});
