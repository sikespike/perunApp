var fs = require("fs-jetpack");
import {ViewEvent} from "../event/viewEvent.js";
import {dispatchManager} from "./dispatchManager.js";


function FileManager() {
    this.templateFolder = "./lib/view/templates";
};

FileManager.prototype.init = function () {
    var self = this;
    dispatchManager.init();

    dispatchManager.addActionListener(ViewEvent.FILE_REQUEST,
        function (event, data) {
            fs.readAsync(data, function (file) {
                dispatchManager.dispatchEvent(ViewEvent.FILE_RESPONCE, file);
            });
        }, this);

    dispatchManager.addActionListener(ViewEvent.TEMPLATE_REQUEST,
        function (event, data) {
            fs.readAsync(self.templateFolder + "/" + data).then(function (file) {
                dispatchManager.dispatchEvent(ViewEvent.TEMPLATE_RESPONCE, file);
            });
        }, this);
};

var _instance = new FileManager();
_instance.init();

export var fileManager = _instance;