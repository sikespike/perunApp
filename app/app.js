var $ = require("jquery");

import {abstractView} from "./lib/view/abstractView.js";
import {fileManager} from "./lib/managers/fileManager.js";

function startApp() {
    $("#main-container").html("hello world");
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