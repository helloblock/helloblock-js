var _ = require( "underscore" );
var request = require( "request" );
var me = module.exports;

var HelloBlockClient = require( "../HelloBlockClient" )

me.retrieve = function( options, callback ) {
  HelloBlockClient.get( "faucet", options, callback );
}

me.withdraw = function( options, callback ) {
  HelloBlockClient.post( "faucet/withdraw", options, callback );
}

me.random = function( options, callback ) {
  HelloBlockClient.get( "faucet/random", options, callback );
}

me.stats = function( options, callback ) {
  HelloBlockClient.get( "faucet/stats", options, callback );
}
