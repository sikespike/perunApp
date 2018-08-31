var os = require('os');
var udp = require('dgram');
var events = require("events");
var eventEmitter = new events.EventEmitter();

import {Event} from "../event/event.js";

var BROADCAST_MSG = new Buffer(Event.NET.CLIENT_BROADCAST);

var self = this;

function NetUtil() {
}

NetUtil.prototype.getAddresses = function() {
    var interfaces = os.networkInterfaces();
    var addresses = [];

    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address);
            }
        }
    }

    for(var x=0; x<addresses.length;x++) {
        var addressSplit = addresses[x].address.split(".");
        var maskSplit = addresses[x].netmask.split(".");

        var result = "";

        var binaryAdd = 0;
        var binaryMask = 0;

        for(var y=0;y<addressSplit.length;y++) {
            var add = parseInt(addressSplit[y]);
            var mask = parseInt(maskSplit[y]);

            binaryAdd = (binaryAdd << 8) | add;
            binaryMask = (binaryMask << 8) | mask;
        }

        var tempResult = binaryAdd | (~binaryMask);

        for(var y=0;y<addressSplit.length;y++) {
            var left = 8*y;

            var octet = (tempResult << left) >>> 24;
            result += y+1 != addressSplit.length ? octet+".": octet;
        }

        addresses[x].broadcast = result;
    }

    return addresses;
};

NetUtil.prototype.locateClient = function(hostInfo, callback) {
    var server = udp.createSocket('udp4');

    eventEmitter.on(Event.NET.CLIENT_BROADCAST, function(){
        broadcastClient.call(self, server, hostInfo);
    });

    server.on('listening', function () {
        var address = server.address();
        server.setBroadcast(true);

        console.log('UDP Server listening on ' + address.address + ":" + address.port);

        eventEmitter.emit(Event.NET.CLIENT_BROADCAST);
    });

    server.on('message', function (message, remote) {
        console.log("Discovered device at:"+ remote.address + ':' + remote.port);

        if(message == Event.NET.CLIENT_BROADCAST_RESPONSE) {
            eventEmitter.removeAllListeners(Event.NET.CLIENT_BROADCAST);
            server.close();
            callback.call(self, remote);
        }
    });

    server.bind(hostInfo.address);
};

NetUtil.prototype.locateServer = function(hostInfo, callback) {
    var client = udp.createSocket('udp4');

    client.on('listening', function () {
        var address = client.address();
        console.log('UDP Server listening on ' + address.address + ":" + address.port);
    });

    client.on("message", function(message, remote) {
        console.log("Found remote server...terminating loop");
        console.log("Remote server info: "+remote.address + ':' + remote.port);
    });

    client.bind(hostInfo.port);
};

NetUtil.prototype.establishConnection = function(hostInfo, target, callback) {

};

function broadcastClient(server, hostInfo) {
    server.send(BROADCAST_MSG, 0, BROADCAST_MSG.length, hostInfo.remotePort, hostInfo.broadcast, function(err, bytes) {
        if (err){
            throw err;
        }
        console.log('UDP message sent to ' + hostInfo.broadcast +':'+ hostInfo.remotePort);
    });

    _.delay(function(){
        eventEmitter.emit(Event.NET.CLIENT_BROADCAST);
    }, 1000);
}



export var netUtil = new NetUtil();