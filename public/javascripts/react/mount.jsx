/** @jsx React.DOM */

$(document).ready(function () {
    var newInputButton = document.getElementById('react-new-input');
    if (newInputButton) React.renderComponent(<NewInputButton />, newInputButton);
});