/** @jsx React.DOM */

var NewInputButton = React.createClass({
    getInitialState: function () {
        return {type: null, inputTypes: []};
    },
    componentDidMount: function () {
        InputsStore.addChangeListener(this._onInputTypesChanged);
        InputsStore.loadTypes();
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
        $('[data-inputtype="' + this.state.type + '"]').modal();
    },
    render: function () {
        var inputTypes = this.state.inputTypes;
        return (
            <div className="row-fluid input-new">
                <select onChange={this._onChange}>
                    {
                        inputTypes.map(function (inputType) {
                            return <option value={inputType.type}>{inputType.name}</option>;
                        })
                        }
                </select>
            &nbsp;
                <button id="configure-input" onClick={this._onClick} className="btn btn-success">Launch new input</button>
            </div>
            );
    }
});
