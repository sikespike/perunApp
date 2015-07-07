var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../../event/event.js";
import {dispatchManager} from "../../managers/dispatchManager.js";
import {netUtil} from "../../util/netUtil.js";

function OptionsViewModel() {
    this.hostInfo = {
        address:null,
        broadcast:null,
        serverPort:null,
        targetAddress:null,
        targetPorts:null
    };

    var self = this;

    this.randomizePort = function(e, data) {
        randomizePortHandler.call(self)
    };
    this.locateTarget = function(){};
    this.connectToTarget = function(){};
}

OptionsViewModel.prototype.init = function(view) {
    this.view = view;
    initFields.call(this);
};

function randomizePortHandler(e, data) {
    var randomPort = Math.floor(Math.random() * (65536 - 49152)) + 49152;

    this.hostInfo.serverPort = randomPort;

    this.view.set("hostInfo", this.hostInfo);
}

function testCurrentPorts() {
    /*var portString = this.currentPorts.val();

    if(portString.trim() !== "") {
        if(portString.split(",").length == 1 && portString.split(" ").length == 1) {
            var portNumber = parseInt(portString.trim());

            if(portNumber >= 49152 && portNumber <= 65535) {
     //           this.hostInfo.serverPort = portNumber;
            }
        } else {

        }
    }*/
}

function locateTarget() {

}

function connectToTarget() {

}

function initFields() {
    var addresses = netUtil.getAddresses();

    if(addresses.length == 1) {
        this.hostInfo = _.extend(this.hostInfo, addresses[0]);


        this.view.set("hostInfo", this.hostInfo);
        //this.currentAddress.val(this.hostInfo.address);
        //this.broadcastAddress.val(this.hostInfo.broadcast);
    } else {

    }
}

export var OptionsVM = OptionsViewModel;