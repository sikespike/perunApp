var $ = require("jquery");

import {ViewEvent} from "./lib/event/viewEvent.js";
import {dispatchManager} from "./lib/managers/dispatchManager.js";
import {fileManager} from "./lib/managers/fileManager.js";
import {ViewManager} from "./lib/managers/ViewManager.js";

function startApp() {
    var viewName = $("#main-container").data("view");

    dispatchManager.dispatchEvent(ViewEvent.VIEW_CHANGE,{
        viewName: viewName
    });
}

$(function(){
    var gui = require("nw.gui");
    var win = gui.Window.get();

    // Create default menu items for OSX
    if (process.platform === "darwin") {
        var mb = new gui.Menu({ type: "menubar" });
        mb.createMacBuiltin(gui.App.manifest.productName);
        win.menu = mb;
    }

    $(document).ready(function(){
        startApp.call(this);
    });
});