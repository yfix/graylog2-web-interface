/** @jsx React.DOM */

var DebugButton = React.createClass({
    getInitialState: function () {
        return {search: SearchResultStore.getData()};
    },
    // https://github.com/zeroclipboard/zeroclipboard
    componentDidMount: function () {
        this.copyDomNode = this.refs.copy.getDOMNode();
        $(this.copyDomNode).tooltip({title: 'Copy Query', trigger: 'manual'});
        // XXX: We need to make this manual and outside of react in order not to interfere with the evil clipboard
        var clipBoardClient = new ZeroClipboard(this.copyDomNode);
        clipBoardClient.on('mouseover', function (client, args) {
            $(this).tooltip('show');
        });
        clipBoardClient.on('mouseout', function (client, args) {
            $(this).tooltip('hide');
        });
        clipBoardClient.on('complete', function (client, args) {
            $(this).tooltip('destroy');
        });
        SearchResultStore.addChangeListener(this._onResultChange);

    },
    componentWillUnmount: function() {
        SearchResultStore.removeChangeListener(this._onResultChange);
    },
    _onResultChange: function() {
        this.setState({search: SearchResultStore.getData()});
    },

    render: function () {
        // TODO: will have to listen upon population
        var formattedQuery = JSON.stringify(JSON.parse(this.state.search.built_query), null, 4);
        var header = <h2>
            <i ref="copy" className="icon-copy" data-clipboard-target="build-query"></i>
        &nbsp;
        ElasticSearch Query
        </h2>;
        var body = <pre id="build-query">{formattedQuery}</pre>;
        var modal = (
            <BootstrapModal ref="modal" onCancel={this.closeModal} onConfirm={this.closeModal}>
               {header}
               {body}
            </BootstrapModal>
            );
        return (<span>
            <a onClick={this.openModal} className="btn btn-small" role="button">
                <i className="icon-bug"></i>
            </a>
               {modal}
        </span>);
    },
    closeModal: function () {
        this.refs.modal.close();
    },
    openModal: function () {
        this.refs.modal.open();
    }

});
