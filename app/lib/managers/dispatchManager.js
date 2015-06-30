var $ = require("jquery");

function DispatchManager() {
    this.initialized = false;
}

DispatchManager.prototype.init = function () {
    if(!this.initialized) {
        this.initialized = true;
    }
};

DispatchManager.prototype.addActionListener = function (event, func, scope) {
    $(document).on(event, function(e, data){
        func.call(scope,event,data);
    });
};

DispatchManager.prototype.dispatchEvent = function (event, data) {
    $(document).trigger(event, data);
};

var _instance = new DispatchManager();
_instance.init();

export var dispatchManager = _instance;