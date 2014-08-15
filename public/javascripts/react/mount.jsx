/** @jsx React.DOM */

$(document).ready(function () {
    var editInput = document.getElementById('react-new-input');
    if (editInput) React.renderComponent(<NewInputButton />, editInput);

    Array.prototype.slice.call(document.querySelectorAll('[react-edit-input]')).forEach(function (mountNode) {
        React.renderComponent(<EditInputButton />, mountNode);
    });

    var editInputModal = document.getElementById('react-edit-input-modal');
    if (editInputModal) React.renderComponent(<EditInputModal />, editInputModal);
});