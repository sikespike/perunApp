var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../../event/event.js";
import {dispatchManager} from "../../managers/dispatchManager.js";
import {netUtil} from "../../util/netUtil.js";

function MapEditorViewModel() {
    this.changeView = function(e) {
        var $button = $(e.target);

        var viewName = $button.data("view");
        var target = $button.data("target");

        dispatchManager.dispatchEvent(Event.createEvent(Event.VIEW.VIEW_CHANGE),{
            viewName: viewName,
            target: target
        });
    };
}

MapEditorViewModel.prototype.init = function(view) {
    this.view = view;

    initFields.call(this);
};

function initFields() {

}

export var MapEditorVM = MapEditorViewModel;