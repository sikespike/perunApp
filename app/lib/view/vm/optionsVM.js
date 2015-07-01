var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../../event/event.js";
import {dispatchManager} from "../../managers/dispatchManager.js";
import {netUtil} from "../../util/netUtil.js";

function OptionsViewModel(container) {
    this.container = container;
    this.hostInfo = null;
    this.init();
}

OptionsViewModel.prototype.init = function() {
    initComponents.call(this);
    initEvents.call(this);
    initFields.call(this);
};

function initComponents() {
    this.currentAddress = this.container.find(".my-ip-input");
    this.broadcastAddress = this.container.find(".broadcast-ip-input");
    this.currentPorts = this.container.find(".my-ports-input");

    this.randomPortButton = this.container.find(".random-port-button");
    this.testPortsButton = this.container.find(".test-port-button");

    this.targetAddress = this.container.find(".target-ip-input");
    this.targetPorts = this.container.find(".target-ports-input");

    this.locateButton = this.container.find(".locate-target-button");
    this.connectButton = this.container.find(".connect-button");
}

function initEvents() {
    this.randomPortButton.on("click", _.bind(generateRandomPort, this));
    this.testPortsButton.on("click", _.bind(testCurrentPorts, this));
    this.locateButton.on("click", _.bind(locateTarget, this));
    this.connectButton.on("click", _.bind(connectToTarget, this));
}

function generateRandomPort() {
    var randomPort = Math.floor(Math.random() * (65536 - 49152)) + 49152;

    this.currentPorts.val(randomPort);
}

function testCurrentPorts() {
    var portString = this.currentPorts.val();

    if(portString.trim() !== "") {
        if(portString.split(",").length == 1 && portString.split(" ").length == 1) {
            var portNumber = parseInt(portString.trim());

            if(portNumber >= 49152 && portNumber <= 65535) {
                this.hostInfo.serverPort = portNumber;
            }
        } else {

        }
    }
}

function locateTarget() {

}

function connectToTarget() {

}

function initFields() {
    var addresses = netUtil.getAddresses();

    if(addresses.length == 1) {
        this.hostInfo = addresses[0];

        this.currentAddress.val(this.hostInfo.address);
        this.broadcastAddress.val(this.hostInfo.broadcast);
    } else {

    }
}

export var OptionsVM = OptionsViewModel;