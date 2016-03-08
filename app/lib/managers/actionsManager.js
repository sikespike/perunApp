var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "./dispatchManager.js";
import {ActionsApi} from "../api/actionsApi.js";

function ActionsManager() {
    this.api = null;
}

ActionsManager.prototype.init = function(params) {
    this.api = new ActionsApi();
};

function imageLoadHandler(data) {

}

function imageLoadedHandler(data) {

}

function spriteImportHandler(data) {

}

function spriteImportedHandler(data) {

}

function spriteExportHandler(data) {

}

function spriteExportedHandler(data) {

}

function spriteAddHandler(data) {

}

function spriteAddedHandler(data) {

}

var _instance = new ActionsManager();
_instance.init();

export var actionsManager = _instance;