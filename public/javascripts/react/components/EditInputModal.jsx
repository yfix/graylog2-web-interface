/** @jsx React.DOM */

var EditInputModal = React.createClass({
    getInitialState: function () {
        return {input: {}};
    },
    componentDidMount: function () {
        InputStore.addChangeListener(this._onInputChanged);
    },
    componentWillUnmount: function () {
        InputStore.removeChangeListener(this._onInputChanged);
    },
    _onInputChanged: function() {
        // TODO: seriously???
        var input = InputStore.getInput();
            this.setState({input: input}, function() {
                this._openModal();
            }.bind(this));
    },
    render: function () {
        var header = <h2>{this.state.input.name}</h2>;
        var body = <pre>{JSON.stringify(this.state.input)}</pre>;
        return (
            <BootstrapModal ref="modal" onCancel={this._closeModal} onConfirm={this._save} cancel="Cancel" confirm="Save">
               {header}
               {body}
            </BootstrapModal>
        );
    },
    _closeModal: function () {
        this.refs.modal.close();
    },
    _openModal: function () {
        this.refs.modal.open();
    },
    _save: function () {
        // TODO: Save to inputstore
        this._closeModal();
    }

});
