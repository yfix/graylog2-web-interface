/** @jsx React.DOM */

var FieldSelector = React.createClass({
    render: function () {
        // TODO
    }
});

var SearchSidebar = React.createClass({
    getInitialState: function () {
        return {search: dummyData};
    },
    render: function () {
        var header = <div><h2>Used indices</h2>
        Graylog2 is intelligently selecting the indices it needs to search upon based on the timeframe you selected.
            This list of indices is mainly useful for debugging purposes.
        </div>;
        // XXX weird stuff: main.css used id #used-indices to properly format list of used indices in modal, removed this from css rule
        var body = (<div>
            <h4>Indices used for this search:</h4>
            <ul className="index-list">
            {
                this.state.search.used_indices.sort().map(function(indexName, index) {
                    return <li key="index-{index}">{indexName}</li>;
                })
            }
            </ul>
            </div>);
        var modal = (
            <BootstrapModal ref="modal" onCancel={this.closeModal} onConfirm={this.closeModal} confirm="Close">
               {header}
               {body}
            </BootstrapModal>
            );

        return (<div>
            <h2>
                <i className="icon-search"></i>
            Search results
            </h2>

        Found&nbsp;
            <span className="number-format" data-format="0,0">{this.state.search.total_results}</span>
        &nbsp;messages in&nbsp;
            <span className="number-format" data-format="0,0">{this.state.search.time}</span>
        ms,&nbsp;
        searched in&nbsp;

            <a onClick={this.openModal} role="button">
                {this.state.search.used_indices.length} {this.state.search.used_indices.length === 1 ? "index" : "indices"}.
            </a>
               {modal}

            

            </div>);
    },

    closeModal: function () {
        this.refs.modal.close();
    },
    openModal: function () {
        this.refs.modal.open();
    }
});