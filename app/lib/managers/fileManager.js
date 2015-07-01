var fs = require("fs-jetpack");

import {ViewEvent} from "../event/viewEvent.js";
import {dispatchManager} from "./dispatchManager.js";

function FileManager() {
    if(_instance == null) {
        this.templateFolder = "./lib/view/templates";
        this.init();
    }
}

FileManager.prototype.init = function () {
    var self = this;
    dispatchManager.init();

    dispatchManager.addActionListener(ViewEvent.FILE_REQUEST,
        function (request) {
            fs.readAsync(request.fileName, function (file) {
                dispatchManager.dispatchEvent(ViewEvent.FILE_RESPONCE, file);
            });
        }, this);

    dispatchManager.addActionListener(ViewEvent.TEMPLATE_REQUEST,
        function (request) {
            fs.readAsync(self.templateFolder + "/" + request.result.templateName).then(function (file) {
                dispatchManager.dispatchEvent(ViewEvent.TEMPLATE_RESPONCE, {
                    viewName:request.result.viewName,
                    html: file
                });
            });
        }, this);
};

var _instance = new FileManager();

export var fileManager = _instance;