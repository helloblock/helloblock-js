var _ = require("underscore");
var request = require("request");
var Blocks = {};
module.exports = Blocks;

var HelloBlockClient = require("../HelloBlockClient")

Blocks.retrieve = function(options, callback) {
  var defaultOpts = {

  }

  var options = _.extend(defaultOpts, options)
  HelloBlockClient.get("blocks", options, callback);
}

Blocks.retrieveLatest = function(options, callback) {
  var defaultOpts = {
    limit: 20,
    offset: 0
  };

  var options = _.extend(defaultOpts, options);
  HelloBlockClient.get("blocks/latest", options, callback);
}

Blocks.retrieveTransaction = function(options, callback) {
  var defaultOpts = {
    limit: 20,
    offset: 0
  };

  var options = _.extend(defaultOpts, options);
  HelloBlockClient.get("blocks/transactions", options, callback);
}
