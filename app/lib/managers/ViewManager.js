var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "./dispatchManager.js";
import {MainVm} from "../view/vm/mainVM.js";


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
    loadViewModel.call(this, data.result);
}

function loadViewModel(viewData) {
    var viewModel = null;

    switch(viewData.viewName) {
        case "optionsView":
            viewModel = new MainVm();
            break;
    }

    var template = paperclip.template(viewData.html);
    var view = template.view(viewModel);

    var renderedView = view.render();
    this.mainContainer[0].appendChild(renderedView);

    viewModel.init(view);
}

var _instance = new ViewManager();

export var viewManager = _instance;