/** @jsx React.DOM */


// TODO: How to pass the time back to query container???
var TimeRangeSelectorRelative = React.createClass({
//    getInitialState: function () {
//        return {value: 300};
//    },
    _onChange: function(event) {
        var value = event.target.value;
        // FIXME: Remove this (Just for debugging)
        console.log(value);
        // TODO: Where do we *really* put the state?
        SearchResultStore.query.relative = value;

//        this.setState({value: value});
    },
    // TODO: reflect the current state (which value is selected) in the rendered result
    render: function () {
        return (<select id="relative-timerange-selector" onChange={this._onChange} name="relative">
                <option value="300">Search in the last 5 minutes</option>
                <option value="900">Search in the last 15 minutes</option>
                <option value="1800">Search in the last 30 minutes</option>
                <option value="3600">Search in the last 1 hour</option>
                <option value="7200">Search in the last 2 hours</option>
                <option value="28800">Search in the last 8 hours</option>
                <option value="86400">Search in the last 1 day</option>
                <option value="172800">Search in the last 2 days</option>
                <option value="432000">Search in the last 5 days</option>
                <option value="604800">Search in the last 7 days</option>
                <option value="1209600">Search in the last 14 days</option>
                <option value="2592000">Search in the last 30 days</option>
                <option value="0">Search in all messages</option>
            </select>);
    }
});

var QueryContainer = React.createClass({
    getInitialState: function () {
        return {q: "", rangeType: "relative"};
    },
    _onSubmit: function (event) {
        SearchResultStore.search();
        event.preventDefault();
    },
    _onChange: function (event) {
        var q = event.target.value;
        this.setState({q: q});
        SearchResultStore.query.q = q;
    },
    _onRangeTypeChange: function (type) {
        this.setState({rangeType: type});
    },

    render: function () {
        var relativeTimeRangeSelectorWidth = {
            width: "270px"
        };
        var absoluteTimeRangeSelectorWidth = {
            width: "570px"
        };
        var keywordTimeRangeSelectorWidth = {
            width: "353px"
        };
        var floatLeftStyle = {
            float: "left"
        };
        var clearBothStyle = {
            clear: "both"
        };
        var relativeTimeRangeSelector = this.state.rangeType !== 'relative' ? null : <div className="timerange-selector relative" style={relativeTimeRangeSelectorWidth}>
            <TimeRangeSelectorRelative />
        </div>;
        var absoluteTimeRangeSelector = this.state.rangeType !== 'absolute' ? null : <div className="timerange-selector absolute" style={absoluteTimeRangeSelectorWidth}>TODO</div>;
        var keywordTimeRangeSelector = this.state.rangeType !== 'keyword' ? null : <div className="timerange-selector relative"  style={keywordTimeRangeSelectorWidth}>TODO</div>;

        return (
            <div className="row-fluid no-bm">
                <div className="span12" id="universalsearch">
                    <form className="universalsearch-form" onSubmit={this._onSubmit}>

                        <div className="timerange-selector-container" style={floatLeftStyle}>
                            <div className="btn-group timerange-chooser">
                                <a className="btn btn-info dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="icon icon-time"></i>
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#" data-selector-name="relative" onClick={this._onRangeTypeChange.bind(this, "relative")} className={this.state.rangeType === 'relative' ? 'selected' : null}>Relative</a>
                                    </li>
                                    <li>
                                        <a href="#" data-selector-name="absolute" onClick={this._onRangeTypeChange.bind(this, "absolute")} className={this.state.rangeType === 'absolute' ? 'selected' : null}>Absolute</a>
                                    </li>
                                    <li>
                                        <a href="#" data-selector-name="keyword" onClick={this._onRangeTypeChange.bind(this, "keyword")} className={this.state.rangeType === 'keyword' ? 'selected' : null}>Keyword</a>
                                    </li>
                                </ul>
                            </div>
                            {relativeTimeRangeSelector}
                            {absoluteTimeRangeSelector}
                            {keywordTimeRangeSelector}
                        </div>

                        <br style={clearBothStyle} />

                        <div className="pull-right search-help">
                            <HelpBubble link="graylog2-web-interface/the-search-bar-explained" />
                        </div>

                        <div className="search-container">
                            <button type="submit" className="btn btn-success icon-search pull-left"></button>
                            <div className="query">
                                <input type="text" onChange={this._onChange} value={this.state.q} placeholder='Type your search query here and press enter. ("not found" AND http) OR http_response_code:[400 TO 404]' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            );
    }
});
