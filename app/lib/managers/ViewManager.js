var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "./dispatchManager.js";
import {OptionsVM} from "../view/vm/optionsVM.js";

function ViewManager() {
    if(_instance == null) {
        this.mainContainer = null;
        this.init();
    }
};

ViewManager.prototype.init = function(params) {
    this.mainContainer = $("#main-container");

    dispatchManager.addActionListener(Event.createEvent(Event.VIEW.VIEW_CHANGE),
        changeView, this);
    dispatchManager.addActionListener(Event.createEvent(Event.VIEW.TEMPLATE_RESPONSE),
        loadTemplate, this);
};

function changeView(data) {
    var templateName = data.result.viewName+"Template.tpl";

    dispatchManager.dispatchEvent(Event.createEvent(Event.VIEW.TEMPLATE_REQUEST), {
        viewName: data.result.viewName,
        templateName: templateName
    });
};

function loadTemplate(data) {
    this.mainContainer.html(data.result.html);
    loadViewModel.call(this, data.result.viewName);
}

function loadViewModel(viewName) {
    var $page = this.mainContainer.children().first();

    switch(viewName) {
        case "optionsView":
            this.currentView = new OptionsVM($page);
            break;
    }
}

var _instance = new ViewManager();

export var viewManager = _instance;