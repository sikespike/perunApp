define(["require","requirejs"], function(require, requirejs){
    var $ = require("jquery");

    var viewName = $("main-container").data("view");

    requirejs(["require","views/"+viewName], function (require,View) {

    });
});
