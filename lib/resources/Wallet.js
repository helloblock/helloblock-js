var _ = require("underscore");
var request = require("request");
var Wallet = {};
module.exports = Wallet;

var HelloBlockClient = require("../HelloBlockClient")

me.retrieve = function(options, callback) {
  var defaultOpts = {
    transactions: true,
    unspents: true,
    limit: 20,
    offset: 0,
  }

  var options = _.extend(defaultOpts, options)
  HelloBlockClient.get("wallet", options, callback);
}
