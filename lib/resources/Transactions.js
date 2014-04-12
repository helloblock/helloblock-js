var util = require('util'),
	_ = require('underscore'),
	request = require('request'),
	Client = require('./client').Client;

module.exports = Transaction;

// inherits from base Client class
function Transaction(options) {
	Client.call(this, options)
}

util.inherits(Transaction, Client)

// todo: // better error message
// txHash {String}
Transaction.prototype.get = function(txHash, options, callback) {
	var self = this;
	if (_.isFunction(options)) callback = options;

	if (!_validate([txHash])) {
		return callback(new Error('Incorrect txHash'));
	}

	self.request({
		method: 'GET',
		resource: 'transaction',
		uri: ['transactions', txHash],
	}, callback)
}

// txHashes Array[String]
Transaction.prototype.batchGet = function(txHashes, options, callback) {
	var self = this;
	if (_.isFunction(options)) callback = options;

	if (!_validate(txHashes)) {
		return callback(new Error('Incorrect txHash'));
	}

	self.request({
		method: 'GET',
		resource: 'transactions',
		uri: ['transactions'],
		params: {
			txHashes: txHashes
		}
	}, callback)
}

Transaction.prototype.latest = function(options, callback) {
	var self = this;
	if (_.isFunction(options)) callback = options;

	self.request({
		method: 'GET',
		resource: 'transactions',
		uri: ['transactions', 'latest']
	}, callback)
}

Transaction.prototype.propogate = function(rawTxHex, options, callback) {
	var self = this;
	if (_.isFunction(options)) callback = options;

	self.request({
		method: 'POST',
		uri: ['transactions'],
		body: {
			rawTxHex: rawTxHex
		}
	}, callback)
}

function _validate(txHashes) {
	for (var i = 0; i < txHashes.length; i++) {
		var txHash = txHashes[i];
		if ('string' != typeof txHash && txHash.length !== 64) {
			return false;
		}
	}

	return true;
}