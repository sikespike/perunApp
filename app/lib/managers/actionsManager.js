var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "./dispatchManager.js";

function ActionsManager() {
    this.initialized = false;
}

ActionsManager.prototype.init = function(params) {
    if(!this.initialized) {
        this.initialized = true;

        dispatchManager.addActionListener(Event.createEvent(""),
                                          function(){}, this);
        dispatchManager.addActionListener(Event.createEvent(""),
                                          function(){}, this);
    }
};

var _instance = new ActionsManager();
_instance.init();

export var actionsManager = _instance;