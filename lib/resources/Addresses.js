var _ = require("underscore");
var request = require("request");
var Addresses = {};
module.exports = Addresses;

var HelloBlockClient = require("../HelloBlockClient")

Addresses.retrieve = function(options, callback) {
	var defaultOpts = {

	}

	var options = _.extend(defaultOpts, options)
	HelloBlockClient.get("addresses", options, callback);
}

Addresses.retrieveBatch = function(options, callback) {
	var defaultOpts = {

	}

	var options = _.extend(defaultOpts, options)
	HelloBlockClient.get("addresses", options, callback);
}

Addresses.retrieveUnspents = function(options, callback) {
	var defaultOpts = {
		limit: 20,
		offset: 0
	}

	var options = _.extend(defaultOpts, options)
	HelloBlockClient.get("addresses/unspents", options, callback);
}

Addresses.retrieveTransactions = function(options, callback) {
	var defaultOpts = {
		limit: 20,
		offset: 0
	};

	var options = _.extend(defaultOpts, options);
	HelloBlockClient.get("addresses/transactions", options, callback);
}
