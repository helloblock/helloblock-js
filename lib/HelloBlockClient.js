var me = module.exports;
var HelloBlock = require( "./HelloBlock" );
var request = require( "request" );

me.getBaseUrl = function() {
	return "https://" + HelloBlock.BLOCKCHAIN_NETWORK + ".helloblock.io/v1"
}

me.get = function( resource, options, callback ) {

	var url = me.buildUrl( resource, options )

	request( {
		url: url,
		qs: options,
		method: "GET",
		json: true
	}, function( error, response, body ) {

		if ( error ) {
			return callback( error, null );
		}

		if ( response.statusCode !== 200 ) {
			return callback( {
				headers: response.headers,
				statusCode: response.statusCode,
				body: body
			}, null )
		}

		callback( null, body.data );

	} )
}

me.post = function( resource, options, callback ) {

	var url = me.buildUrl( resource, options )

	request( {
		url: url,
		body: options,
		method: "POST",
		json: true
	}, function( error, response, body ) {

		if ( error ) {
			return callback( error, null );
		}

		if ( response.statusCode !== 200 ) {
			return callback( {
				headers: response.headers,
				statusCode: response.statusCode,
				body: body
			}, null )
		}

		callback( null, body.data );

	} )
}

me.buildUrl = function( resource, options ) {
	var url = me.getBaseUrl() + "/" + resource + "/";

	// TODO: hack for singular resources;
	if ( options.address ) {
		url += options.address;
	}

	if ( options.txHash ) {
		url += options.txHash;
	}

	if ( options.blockId ) {
		url += options.blockId;
	}

	return url
}
