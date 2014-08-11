/** @jsx React.DOM */

var FieldSelector = React.createClass({
    // TODO: misses the code for analyzis (the cog button)
    // TODO: Cogs are not aligned with check boxes
    // TODO: Check: is it good style to directly access fields from store? Rather have it as a state? Or pass in as prop from outside???
    _onFieldToggle: function (fieldToToggle) {
        var selectedFields = SelectedFieldsStore.getFields();
        if (selectedFields.indexOf(fieldToToggle) === -1) {
            selectedFields.push(fieldToToggle);
        } else {
            selectedFields = selectedFields.filter(function (field) {
                return fieldToToggle !== field;
            });
        }
        SelectedFieldsStore.setFields(selectedFields);
    },
    render: function () {
        var selectedFields = SelectedFieldsStore.getFields();
        return (<span>
            <i className="icon icon-cog open-analyze-field"></i>
        &nbsp;

            <label className="field-name">
                <input type="checkbox"
                className="field-selector"
                onChange={this._onFieldToggle.bind(this, this.props.field)}
                checked={selectedFields.indexOf(this.props.field) !== -1 ? "checked" : null} />
            &nbsp;{this.props.field}
            </label>
        </span>);
    }
});

var SearchSidebar = React.createClass({
    getInitialState: function () {
        return {search: dummyData, selectedFields: SelectedFieldsStore.getFields()};
    },
    componentDidMount: function () {
        SelectedFieldsStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        SelectedFieldsStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({selectedFields: SelectedFieldsStore.getFields()});
    },
    render: function () {
        var header = <div>
            <h2>Used indices</h2>
        Graylog2 is intelligently selecting the indices it needs to search upon based on the timeframe you selected.
        This list of indices is mainly useful for debugging purposes.
        </div>;
        // XXX weird stuff: main.css used id #used-indices to properly format list of used indices in modal, removed this from css rule
        var body = (<div>
            <h4>Indices used for this search:</h4>
            <ul className="index-list">
            {
                this.state.search.used_indices.sort().map(function (indexName, index) {
                    return <li key={index}>{indexName}</li>;
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
        var boldStyle = {
            "font-weight": "bold"
        };

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
            <h3>
            Message fields&nbsp;
                <span className="message-result-fields-range">
                    <a href="#" className="page" style={boldStyle}>of current page</a>
                /
                    <a href="#" className="all">all</a>
                </span>
            </h3>

            <div>
                <h4>Quick select fields</h4>
                <div className="message-result-fields-set pull-left">
                    <div className="btn-group">
                        <button className="btn btn-mini fields-set-chooser" data-fields-set="default">Default</button>
                        <button className="btn btn-mini fields-set-chooser" data-fields-set="none">None</button>
                        <button className="btn btn-mini fields-set-chooser" data-fields-set="all">All</button>
                    </div>
                </div>
                <div className="message-result-fields-search input-prepend">
                    <span className="add-on">
                        <i className="icon icon-search"></i>
                    </span>
                    <input type="text" />
                </div>
            </div>
            <div className="nano">
                <div className="content">
                    <div className="inner-content">
                        <ul className="search-result-fields" data-selected="page">
                        {
                            this.state.search.fields.sort().map(function (field, index) {
                                return (
                                    <li key={index} className="search-result-field-type page">
                                        <FieldSelector field={field}/>
                                    </li>
                                    )
                            }, this)
                            }
                        </ul>
                    </div>
                </div>
            </div>
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