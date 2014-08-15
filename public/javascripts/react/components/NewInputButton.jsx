/** @jsx React.DOM */

var NewInputButton = React.createClass({
    getInitialState: function () {
        return {type: null, inputTypes: []};
    },
    componentDidMount: function () {
        InputsStore.addChangeListener(this._onInputTypesChanged);
        InputsStore.init();
    },
    componentWillUnmount: function () {
        InputsStore.removeChangeListener(this._onInputTypesChanged);
    },
    _onInputTypesChanged: function () {
        var types = InputsStore.getTypes();
        var defaultType = this.setState.type || (types.length > 0 && types[0].type);
        this.setState({type: defaultType, inputTypes: types});
    },
    _onChange: function (event) {
        var type = event.target.value;
        this.setState({type: type});
    },
    _onClick: function (event) {
        // TODO: needs to display react based modal
        $('[data-inputtype="' + this.state.type + '"]').modal();
    },
    render: function () {
        var inputTypes = this.state.inputTypes;
        var renderAsOption = function (inputType, index) {
            return <option key={index} value={inputType.type}>{inputType.name}</option>;
        };
        return (
            <div className="row-fluid input-new">
                <select onChange={this._onChange}>
                    {inputTypes.map(renderAsOption)}
                </select>
            &nbsp;
                <button id="configure-input" onClick={this._onClick} className="btn btn-success">Launch new input</button>
            </div>
            );
    }
});
