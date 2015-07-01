var $ = require("jquery");
var _ = require("underscore");

import {ViewEvent} from "../event/viewEvent.js";
import {dispatchManager} from "./dispatchManager.js";
import {OptionsVM} from "../view/vm/optionsVM.js";

function ViewActionManager() {
    if(_instance == null) {
        this.mainContainer = null;

        this.init();
    }
};

ViewActionManager.prototype.init = function(params) {
    this.mainContainer = $("#main-container");

    dispatchManager.addActionListener(ViewEvent.VIEW_CHANGE,
        changeView, this);
    dispatchManager.addActionListener(ViewEvent.TEMPLATE_RESPONCE,
        loadTemplate, this);
};

function changeView(data) {
    var templateName = data.result.viewName+"Template.tpl";

    dispatchManager.dispatchEvent(ViewEvent.TEMPLATE_REQUEST, {
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

var _instance = new ViewActionManager();

export var ViewManager = _instance;