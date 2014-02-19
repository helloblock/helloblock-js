var _ = require( "underscore" );
var request = require( "request" );
var me = module.exports;

var HelloBlockClient = require( "../HelloBlockClient" )

me.retrieve = function( options, callback ) {
  var defaultOpts = {}

  var options = _.extend( defaultOpts, options )
  HelloBlockClient.get( "transactions", options, callback );
}

me.retrieveBatch = function( options, callback ) {
  var defaultOpts = {}

  var options = _.extend( defaultOpts, options )
  HelloBlockClient.get( "transactions", options, callback );
}

me.retrieveLatest = function( options, callback ) {
  var defaultOpts = {
    limit: 20,
    offset: 0
  };

  var options = _.extend( defaultOpts, options );
  HelloBlockClient.get( "transactions/latest", options, callback );
}

me.decodeRawTransaction = function( options, callback ) {
  var defaultOpts = {}

  HelloBlockClient.get( "transactions/decode", options, callback );
}

me.sendRawTransaction = function( options, callback ) {
  var defaultOpts = {};

  var options = _.extend( defaultOpts, options );
  HelloBlockClient.post( "transactions", options, callback );
}
