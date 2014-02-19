var _ = require( "underscore" );
var request = require( "request" );
var me = module.exports;

var HelloBlockClient = require( "../HelloBlockClient" )

me.retrieve = function( options, callback ) {
  var defaultOpts = {
    transactions: true,
    limit: 20,
    offset: 0
  }

  var options = _.extend( defaultOpts, options )
  HelloBlockClient.get( "blocks", options, callback );
}

me.retrieveLatest = function( options, callback ) {
  var defaultOpts = {
    limit: 20,
    offset: 0
  };

  var options = _.extend( defaultOpts, options );
  HelloBlockClient.get( "blocks/latest", options, callback );
}

// me.retrieveTransaction = function( options, callback ) {
//   var defaultOpts = {
//     limit: 20,
//     offset: 0
//   };

//   var options = _.extend( defaultOpts, options );
//   HelloBlockClient.get( "blocks/transactions", options, callback );
// }
