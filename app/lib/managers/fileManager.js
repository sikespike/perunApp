var fs = require("fs-jetpack");
import {ViewEvent} from "../event/viewEvent.js";
import {dispatchManager} from "./dispatchManager.js";


function FileManager() {
    this.templateFolder = "./lib/ui/views/templates";
};

FileManager.prototype.init = function () {
    dispatchManager.addActionListener(ViewEvent.FILE_REQUEST,
        function (event, data) {
            fs.readAsync(data, function (file) {
                dispatchManager.dispatchEvent(ViewEvent.VIEW_FILE_RESPONCE, file);
            });
        }, this);

    dispatchManager.addActionListener(ViewEvent.TEMPLATE_REQUEST,
        function (event, data) {
            fs.readAsync(this.templateFolder + "/" + data, function (file) {
                dispatchManager.dispatchEvent(ViewEvent.VIEW_TEMPLATE_RESPONCE, file);
            });
        }, this);
};

export var fileManager = FileManager;