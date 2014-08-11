(function(exports) {
    'use strict';

    function mixin(_sub, _super) {
        for (var p in _super.prototype) {
            if (_super.prototype.hasOwnProperty(p) && p !== 'constructor') {
                _sub.prototype[p] = _super.prototype[p];
            }
        }
    }
    function mergeInto(to, from) {
        for (var p in from) {
            if (from.hasOwnProperty(p)) {
                to[p] = from[p];
            }
        }
    }
    exports.mixin = mixin;
    exports.mergeInto = mergeInto;
}((typeof exports === 'undefined') ? window.util = {} : exports));