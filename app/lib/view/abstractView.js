var $ = require("jquery");

import {ViewEvent} from "../event/viewEvent.js";
import {dispatchManager} from "../managers/dispatchManager.js";

function AbstractView() {
};

AbstractView.prototype.init = function(params) {
    this.viewName = !!params.viewName ? params.viewName: "AbstractView";
    this.templateName = !!params.templateName ?
        params.templateName : this.viewName+"Template.tpl";

    dispatchManager.addActionListener(ViewEvent.TEMPLATE_RESPONCE,
        this.loadTemplate, this);

    dispatchManager.dispatchEvent(ViewEvent.TEMPLATE_REQUEST, this.templateName);
};

AbstractView.prototype.loadTemplate = function(event, data) {
    $("#main-container").html(data);
};

export var abstractView = new AbstractView();