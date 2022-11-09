(function() {
    // injected DOM script is not a content script anymore,
    // it can modify objects and functions of the page
    var _pushState = history.pushState;
    history.pushState = function(state, title, url) {
        _pushState.call(this, state, title, url);
        window.dispatchEvent(
            new CustomEvent('state-changed', { detail: url })
        );
    };
    // repeat the above for replaceState too
})();