var _ = require("underscore");
var request = require("request");
var Faucet = {};
module.exports = Faucet

var HelloBlockClient = require("../HelloBlockClient")

Faucet.retrieve = function(options, callback) {
  HelloBlockClient.get("faucet", options, callback);
}

Faucet.withdraw = function(options, callback) {
  HelloBlockClient.post("faucet/withdraw", options, callback);
}

// Faucet.random = function(options, callback) {
//   HelloBlockClient.get("faucet/random", options, callback);
// }

// Faucet.stats = function(options, callback) {
//   HelloBlockClient.get("faucet/stats", options, callback);
// }