var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "../managers/dispatchManager.js";

function ActionsApiService() {
    this.init();
}

ActionsApiService.prototype.init = function(params) {

};

export var ActionsApi = ActionsApiService;