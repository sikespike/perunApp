var $ = require("jquery");

define(function (require) {
    var _ = require("underscore");

    function DispatchManager() {
        this.initialized = false;
    }

    DispatchManager.prototype.init = function() {
        if(!this.initialized) {
            this.eventCatcher = $("body");
        }
    };

    DispatchManager.prototype.addActionListener = function(event, func, scope) {
        this.eventCatcher.on(event,_.bind(func,scope));
    };

    DispatchManager.prototype.dispatchEvent = function(event, data) {
        this.eventCatcher.trigger(event, data);
    };

    var _instance = new DispatchManager();
    return _instance;
});
