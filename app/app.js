var os = require('os');
var requirejs = require('requirejs');

function startApp() {
    requirejs.config({
        baseUrl: "./lib",
        paths: {
            "model": "model/",
            "net": "net/",
            "ui": "ui/"
        }
    });

    requirejs(['app'], function (app) {

    });
}