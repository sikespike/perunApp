var requirejs = require("requirejs");
var $ = require("jquery");

function startApp() {
    requirejs.config({
        baseUrl: "./lib",
        nodeRequire: require,
        paths: {
            "events": "/events",
            "api": "/api",
            "model": "/model",
            "net": "/net",
            "vm": "/ui/vm",
            "views": "/ui/views",
            "templates": "/ui/views/templates"
        }
    });

    var currentView = $("main-container").data("view");

    requirejs(["views/"+currentView,"events/dispatchManager"], function (View, dispatchManager) {
        dispatchManager.init();

        var view = new View({
            viewName: currentView
        });

    });
}