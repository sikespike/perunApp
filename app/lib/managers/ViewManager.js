var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../event/event.js";
import {dispatchManager} from "./dispatchManager.js";
import {MainVM} from "../view/vm/mainVM.js";
import {AvatarEditorVM} from "../view/vm/avatarEditorVM.js";
import {MapEditorVM} from "../view/vm/mapEditorVM.js";
import {GameEditorVM} from "../view/vm/gameEditorVM.js";


function ViewManager() {
    if(_instance == null) {
        this.mainContainer = null;
        this.viewList = [];
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
    if(!this.viewList[data.result.viewName]) {
        var templateName = data.result.viewName+"Template.tpl";

        dispatchManager.dispatchEvent(Event.createEvent(Event.VIEW.TEMPLATE_REQUEST), {
            viewName: data.result.viewName,
            target: data.result.target ? data.result.target : null,
            templateName: templateName
        });
    } else {
        var target = data.result.target ? data.result.target : null;
        showLoadedView.call(this, data.result.viewName, target);
    }
}

function showLoadedView(viewName, target) {
    var $target = this.mainContainer.find("#"+target);

    $target.find("div:not(#"+viewName+")").hide();
    $target.find("#"+viewName).show();
}

function loadTemplate(data) {
    loadViewModel.call(this, data.result);
}

function loadViewModel(viewData) {
    var viewModel = null;

    switch(viewData.viewName) {
        case "mainView":
            viewModel = new MainVM();
            break;
        case "avatarEditor":
            viewModel = new AvatarEditorVM();
            break;
        case "mapEditor":
            viewModel = new MapEditorVM();
            break;
        case "gameEditor":
            viewModel = new GameEditorVM();
            break;
    }

    this.viewList[viewData.viewName] = viewModel;

    var template = paperclip.template(viewData.html);
    var view = template.view(viewModel);

    var renderedView = view.render();

    if(!viewData.target) {
        this.mainContainer[0].appendChild(renderedView);
        viewModel.init(view);
    } else {
        var $target = this.mainContainer.find("#"+viewData.target);
        $target[0].appendChild(renderedView);

        $target.find("div:not(#"+viewData.viewName+")").hide();
    }
}

var _instance = new ViewManager();

export var viewManager = _instance;