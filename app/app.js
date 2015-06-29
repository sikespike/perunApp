var $ = require("jquery");

import {abstractView} from "./lib/view/abstractView.js";
import {fileManager} from "./lib/managers/fileManager.js";

function startApp() {
    $("#main-container").html("hello world");
}

$(function(){
    $(document).ready(function(){
        startApp.call(this);
    });
});