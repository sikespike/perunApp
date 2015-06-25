define(["require"], function (require) {
    "use strict";

    var fs = require("fs-jetpack");
    var $ = require("jquery");

    var requirejs = require("requirejs");
    var ViewEvent = requirejs("events/viewEvent");
    var dispatchManager = requirejs("events/dispatchManager");


    function FileManager() {
        this.initialized = false;
        this.templateFolder = "./lib/ui/views/templates";
    }

    FileManager.prototype.init = function() {
        if(!this.initialized) {
            dispatchManager.addActionListener(ViewEvent.VIEW_FILE_REQUEST,
                fileRequestHandler, this);

            dispatchManager.addActionListener(ViewEvent.VIEW_TEMPLATE_REQUEST,
                fileTemplateRequestHandler, this);
        }
    };

    function fileRequestHandler(event, data) {
        fs.readAsync(data, function(file){
            dispatchManager.dispatchEvent(ViewEvent.VIEW_FILE_RESPONCE, file);
        });
    }

    function fileTemplateRequestHandler(event, data) {
        fs.readAsync(this.templateFolder+"/"+data, function(file){
            dispatchManager.dispatchEvent(ViewEvent.VIEW_TEMPLATE_RESPONCE, file);
        });
    }

    return FileManager;
});