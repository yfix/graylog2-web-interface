/** @jsx React.DOM */

var HelpBubble = React.createClass({
    render: function() {
        return (<a href={"http://support.torch.sh/help/kb/" + this.props.link} target="_blank">
            <i className="icon icon-lightbulb"></i>
        </a>);
    }
});
