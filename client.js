window = global
window.BlobBuilder = require("BlobBuilder")
location = {protocol: 'http'}

BinaryPack = require("binary-pack")
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var wrtc = require('electron-webrtc')()
var Peer = require('peerjs')

RTCPeerConnection = wrtc.RTCPeerConnection;
RTCSessionDescription = wrtc.RTCSessionDescription;
RTCIceCandidate = wrtc.RTCIceCandidate;

WebSocket = require('ws')
//require('./node_modules/peerjs/lib/exports.js');

var peer = new Peer('basic-client-peer', {key: '2m6k58wu8kwt57b9', debug: true});
//
var conn=peer.connect('basic-id')
conn.serialization='none'
conn.send('hello from nodejs!')
