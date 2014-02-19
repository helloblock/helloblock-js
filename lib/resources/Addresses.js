var _ = require( "underscore" );
var request = require( "request" );
var me = module.exports;

var HelloBlockClient = require( "../HelloBlockClient" )

me.retrieve = function( options, callback ) {
	var defaultOpts = {
		transactions: true,
		unspents: true,
		limit: 20,
		offset: 0,
	}

	var options = _.extend( defaultOpts, options )
	HelloBlockClient.get( "addresses", options, callback );
}

me.retrieveUnspents = function( options, callback ) {
	var defaultOpts = {
		limit: 20,
		offset: 0
	}

	var options = _.extend( defaultOpts, options )
	HelloBlockClient.get( "addresses/unspents", options, callback );
}

me.retrieveTransactions = function( options, callback ) {
	var defaultOpts = {
		limit: 20,
		offset: 0
	};

	var options = _.extend( defaultOpts, options );
	HelloBlockClient.get( "addresses/transactions", options, callback );
}
