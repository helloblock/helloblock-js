var _ = require("underscore");
var request = require("request");
var Transactions = {};
module.exports = Transactions

var HelloBlockClient = require("../HelloBlockClient")

Transactions.retrieve = function(options, callback) {
  var defaultOpts = {}

  var options = _.extend(defaultOpts, options)
  HelloBlockClient.get("transactions", options, callback);
}

Transactions.retrieveBatch = function(options, callback) {
  var defaultOpts = {}

  var options = _.extend(defaultOpts, options)
  HelloBlockClient.get("transactions", options, callback);
}

Transactions.retrieveLatest = function(options, callback) {
  var defaultOpts = {
    limit: 20,
    offset: 0
  };

  var options = _.extend(defaultOpts, options);
  HelloBlockClient.get("transactions/latest", options, callback);
}

Transactions.decode = function(options, callback) {
  var defaultOpts = {}

  HelloBlockClient.get("transactions/decode", options, callback);
}

Transactions.propagate = function(options, callback) {
  var defaultOpts = {};

  var options = _.extend(defaultOpts, options);
  HelloBlockClient.post("transactions", options, callback);
}
