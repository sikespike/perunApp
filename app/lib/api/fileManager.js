var $ = require("jquery");
require("jquery-ui");

define(function (require) {
    var fs = require("fs-jetpack");

    var dispatchManager = requirejs("events/dispatchManager");
    var ViewEvent = requirejs("events/viewEvent");


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

    var _instance = new FileManager();
    return _instance;
});