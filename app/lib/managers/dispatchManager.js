var $ = require("jquery");

function DispatchManager() {
    this.initialized = false;
}

DispatchManager.prototype.init = function () {
    if(!this.initialized) {
        this.initialized = true;
        this.eventCatcher = $("body");
    }
};

DispatchManager.prototype.addActionListener = function (event, func, scope) {
    this.eventCatcher.on(event, function(e, data){
        func.call(scope,event,data);
    });
};

DispatchManager.prototype.dispatchEvent = function (event, data) {
    this.eventCatcher.trigger(event, data);
};

var _instance = new DispatchManager();
_instance.init();

export var dispatchManager = _instance;