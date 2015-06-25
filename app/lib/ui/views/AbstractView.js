define(["require","requirejs"], function (require, requirejs) {
    "use strict";

    var ViewEvent = requirejs("events/viewEvent");
    var dispatchManager = requirejs("events/dispatchManager");

    function AbstractView() {
        this.viewName = null;
        this.templateName = null;
    }

    AbstractView.prototype.init = function(params) {
        if(params){
            this.viewName = !!params.viewName ? params.viewName: "AbstractView";
            this.templateName = !!params.templateName ?
                params.templateName : getTemplateName.call(this, this.viewName);

            dispatchManager.addActionListener(ViewEvent.VIEW_TEMPLATE_RESPONCE,
                templateResponceHandler, this);

            requestViewTemplate.call(this);
        }
    };

    function getTemplateName(viewName) {
        return viewName+"Template.tpl";
    }

    function requestViewTemplate() {
        dispatchManager.dispatchEvent(ViewEvent.VIEW_TEMPLATE_REQUEST, this.templateName);
    }

    function templateResponceHandler(event, data) {

    }

    return AbstractView;
});
