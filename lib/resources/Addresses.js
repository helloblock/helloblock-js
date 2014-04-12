var util = require('util'),
  _ = require('underscore'),
  Client = require('./client').Client;

module.exports = Address;

// inherits from base Client class
function Address(options) {
  Client.call(this, options)
}

util.inherits(Address, Client)

// todo: // better error message
// txHash {String}
Address.prototype.get = function(address, options, callback) {
  var self = this;
  if (_.isFunction(options)) callback = options;

  self.request({
    method: 'GET',
    resource: 'address',
    uri: ['addresses', address],
  }, callback)
}

// txHashes Array[String]
Address.prototype.batchGet = function(addresses, options, callback) {
  var self = this;
  if (_.isFunction(options)) callback = options;

  self.request({
    method: 'GET',
    resource: 'addresses',
    uri: ['addresses'],
    params: {
      addresses: addresses
    }
  }, callback)
}

// address {string|Array[string]}
Address.prototype.getTransactions = function(address, options, callback) {
  var self = this;
  if (_.isFunction(options)) callback = options;

  if ('string' == typeof address) {
    self.request({
      method: 'GET',
      resource: 'transactions',
      uri: ['addresses', address, 'transactions']
    }, callback)
  } else if (Array.isArray(address)) {
    self.request({
      method: 'GET',
      resource: 'transactions',
      uri: ['addresses', 'transactions'],
      params: {
        addresses: address
      }
    }, callback)
  } else {
    return callback(new Error('Incorrect Addresses'))
  }
}

// address {string|Array[string]}
Address.prototype.getUnspents = function(address, options, callback) {
  var self = this;
  if (_.isFunction(options)) callback = options;

  if ('string' == typeof address) {
    self.request({
      method: 'GET',
      resource: 'unspents',
      uri: ['addresses', address, 'unspents']
    }, callback)
  } else if (Array.isArray(address)) {
    self.request({
      method: 'GET',
      resource: 'unspents',
      uri: ['addresses', 'unspents'],
      params: {
        addresses: address
      }
    }, callback)
  } else {
    return callback(new Error('Incorrect Addresses'))
  }
}