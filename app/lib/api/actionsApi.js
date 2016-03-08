var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "./dispatchManager.js";

function ActionsApi() {
    this.initialized = false;
}

ActionsApi.prototype.init = function(params) {
    if(!this.initialized) {
        this.initialized = true;

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.IMAGE_LOAD),
            imageLoadHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.IMAGE_LOADED),
            imageLoadedHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.SPIRE_IMPORT),
            spriteImportHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.SPIRE_IMPORTED),
            spriteImportedHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.SPIRE_EXPORT),
            spriteExportHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.SPIRE_EXPORTED),
            spriteExportedHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.SPIRE_ADD),
            spriteAddHandler, this);

        dispatchManager.addActionListener(Event.createEvent(Event.VIEW.ACTIONS.SPIRE_ADDED),
            spriteAddedHandler, this);
    }
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

export var actionsApi = new ActionsApi();