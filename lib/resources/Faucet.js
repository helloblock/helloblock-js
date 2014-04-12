var util = require('util'),
  request = require('request'),
  _ = require('underscore'),
  Client = require('./client').Client;

module.exports = Faucet;
// inherits from base Client class
function Faucet(options) {
  Client.call(this, options)
}

util.inherits(Faucet, Client);

// todo: // better error message
// type {Integer}
Faucet.prototype.get = function(type, options, callback) {
  var self = this;
  if (_.isFunction(options)) callback = options;

  self.request({
    method: 'GET',
    uri: ['faucet'],
    params: {
      type: type
    }
  }, callback)
}

// toAddress {String}
Faucet.prototype.withdraw = function(toAddress, value, options, callback) {
  var self = this;
  if (_.isFunction(options)) callback = options;

  self.request({
    method: 'POST',
    uri: ['faucet', 'withdrawal'],
    body: {
      toAddress: toAddress,
      value: value
    }
  }, callback)
}