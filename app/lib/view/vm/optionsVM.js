var $ = require("jquery");
var _ = require("underscore");

import {Event} from "../../event/event.js";
import {dispatchManager} from "../../managers/dispatchManager.js";
import {netUtil} from "../../util/netUtil.js";

function OptionsViewModel(container) {
    this.container = container;
    this.init();
}

OptionsViewModel.prototype.init = function() {
    initComponents.call(this);
    initEvents.call(this);
    initFields.call(this);
};

function initComponents() {
    this.currentAddress = this.container.find(".my-ip-input");
    this.targetAddress = this.container.find(".target-ip-input");
    this.locateButton = this.container.find(".locate-target-button");
    this.connectButton = this.container.find(".connect-button");
}

function initEvents() {
    this.locateButton.on("click", _.bind(locateTarget, this));
    this.connectButton.on("click", _.bind(connectToTarget, this));
}

function locateTarget() {

}

function connectToTarget() {

}

function initFields() {
    var addresses = netUtil.getAddresses();
}

export var OptionsVM = OptionsViewModel;