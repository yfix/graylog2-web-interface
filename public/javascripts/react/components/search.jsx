/** @jsx React.DOM */

var ColumnSorter = React.createClass({
    sortAscending: function () {
        SearchResultStore.sort(this.props.fieldName, "asc", this.props.page);
    },
    sortDescending: function () {
        SearchResultStore.sort(this.props.fieldName, "desc", this.props.page);
    },
    render: function () {
        return (<span>
            <a onClick={this.sortAscending}>
                <i className="icon icon-sort-by-attributes-alt icon-flip-vertical sort-order sort-order-asc choose-sort-order" title="Sort ascending"></i>
            </a>
            <a onClick={this.sortDescending}>
                <i className="icon icon-sort-by-attributes-alt sort-order choose-sort-order sort-order-desc" title="Sort descending"></i>
            </a>
        </span>);
    }
});

var SearchResult = React.createClass({
    handleResultClicked: function (result, e) {
        console.error("Selection of result not implemented, yet");
        console.error("Should display details of ", result);
    },
    render: function () {
        var result = this.props.message;
        var fields = this.props.selectedFields;
        return <tr onClick={this.handleResultClicked.bind(this, result)}>{fields.map(function (field, index) {
            return <td key={"result-field-" + index}>{result[field]}</td>
        })}</tr>;
    }
});

var SearchResultHeader = React.createClass({
    render: function () {
        var style = null;
        if (this.props.width) {
            style = {
                width: this.props.width
            };
        }
        return (<th style={style}>{this.props.title}
            <ColumnSorter fieldName={this.props.fieldName} search={this.props.search} page={this.props.page}/>
        </th>);
    }
});

var SearchResults = React.createClass({
    getInitialState: function () {
        return {search: SearchResultStore.getData(), page: 1, defaultFields: SelectedFieldsStore.defaultFields, selectedFields: SelectedFieldsStore.getFields()};
    },
    componentDidMount: function() {
        SelectedFieldsStore.addChangeListener(this._onFieldSelectionChange);
        SearchResultStore.addChangeListener(this._onResultChange);
    },
    componentWillUnmount: function() {
        SelectedFieldsStore.removeChangeListener(this._onFieldSelectionChange);
        SearchResultStore.removeChangeListener(this._onResultChange);
    },
    _onFieldSelectionChange: function() {
        this.setState({selectedFields: SelectedFieldsStore.getFields()});
    },
    _onResultChange: function() {
        this.setState({search: SearchResultStore.getData()});
    },
    // TODO: Handle empty result set
    render: function () {
        var timestampHeader = <SearchResultHeader key="timestamp" title="TimeStamp" width="135px" fieldName="timestamp" search={this.state.search} page={this.state.page}/>;
        var sourceHeader = this.state.selectedFields.indexOf("source") === -1 ? null : <SearchResultHeader key="source" title="Source" width="180px" fieldName="source" search={this.state.search} page={this.state.page}/>;
        var messageHeader = this.state.selectedFields.indexOf("message") === -1 ? null : <SearchResultHeader key="message" title="Message" width="180px" fieldName="message" search={this.state.search} page={this.state.page}/>;

        return (<div>
            <h1>Results rendered by react</h1>
            <table className="table table-condensed table-hover table-striped messages">
                <thead><tr>
                    {timestampHeader}
                    {sourceHeader}
                    {messageHeader}
                    {
                        this.state.selectedFields.filter(function (field) {
                            return this.state.defaultFields.indexOf(field) === -1;
                        }, this).map(function (field, index) {
                            return <SearchResultHeader key={index} title={field} fieldName={field} search={this.state.search} page={this.state.page}/>
                        }, this)
                        }
                </tr></thead>
                <tbody>{this.state.search.messages.map(function (message, index) {
                    return <SearchResult key={index} message={message} selectedFields={this.state.selectedFields} />;
                }, this)}
                </tbody>
            </table>
        </div>);
    }
});
