window = global
window.BlobBuilder = require("BlobBuilder")
location = {protocol: 'http'}

// BinaryPack = require("binary-pack");
// XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
BinaryPack = require("binary-pack")
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var wrtc = require('electron-webrtc')()


var wrtc = require("wrtc");
RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

WebSocket = require('ws');

require('./node_modules/peerjs/lib/exports.js');

var peer = new Peer('basic-peer-server',  {host: 'localhost', port: 9000, path: '/', debug: true});

peer.on('open', function () {
  console.log('peer open');
  //
  // var conn = peer.connect('basic-client-peer');



});

peer.on('connection', function(conn) {
    conn.serialization='none'

    conn.on('data', function(data) {
      //TODO Decode actual array buffer data --- Buffer.from(data);
      console.log('Received', data);
    });

    conn.on('error', function (err) {
      console.log('Error', err);
    });

    conn.on('open', function (id) {
      console.log(`connection open: ${id}`);
      conn.send('Hello from ' + peer.id + '!');
    });
});
