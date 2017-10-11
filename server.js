var peerjsConfig = require("./peerjsConfig.js");
var clientName = 'node-client';
window = global
window.BlobBuilder = require("BlobBuilder")
location = {protocol: 'http'}
BinaryPack = require("binary-pack")
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var wrtc = require("wrtc");
RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;
WebSocket = require('ws');
require('./node_modules/peerjs/lib/exports.js');

var peer = new Peer(clientName, peerjsConfig);

peer.on('open', function () {
  console.log('peer open');
  //
  // var conn = peer.connect('basic-client-peer');
});

peer.on('connection', function(conn) {
    conn.serialization='none' // Note: this circumvents Blob/BlobBuilder in Node - but it may not be very efficient - to investigate

    conn.on('data', function(data) {
      //TODO Decode actual array buffer data --- Buffer.from(data);
      console.log('Received', data, Buffer.from(data, 1).toString());
    });

    conn.on('error', function (err) {
      console.log('Error', err);
    });

    conn.on('open', function (id) {
      console.log(`connection open: ${id}`);
      conn.send('Hello from ' + peer.id + '!');
    });
});
