/** @jsx React.DOM */

$(document).ready(function () {
    // TODO: How to we selectively add react component into otherwise static html?
    // Do we just have a single big react component for the relevant parts of a page?
    Array.prototype.slice.call(document.querySelectorAll('[debug]')).forEach(function (mountNode) {
        React.renderComponent(<DebugButton data={dummyData}/>, mountNode);
    });
    var searchResultMountNode = document.getElementById('react-search-result');
    if (searchResultMountNode) React.renderComponent(<SearchResults />, searchResultMountNode);

    var searachSidebarMountNode = document.getElementById('react-search-sidebar');
    if (searachSidebarMountNode) React.renderComponent(<SearchSidebar />, searachSidebarMountNode);

});