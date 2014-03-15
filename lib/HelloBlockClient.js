var HelloBlock = require("./HelloBlock");
var request = require("request");

var Client = {};
module.exports = Client;

Client.getBaseUrl = function() {
	return "https://" + HelloBlock.BLOCKCHAIN_NETWORK + ".helloblock.io/v1"
}

Client.get = function(resource, options, callback) {

	var url = Client.buildUrl(resource, options)

	request({
		url: url,
		qs: options,
		method: "GET",
		json: true
	}, function(error, response, body) {

		if (error) {
			return callback(error, null);
		}

		if (response.statusCode !== 200) {
			return callback({
				headers: response.headers,
				statusCode: response.statusCode,
				body: body
			}, null)
		}

		callback(null, body.data);

	})
}

Client.post = function(resource, options, callback) {

	var url = Client.buildUrl(resource, options)

	request({
		url: url,
		body: options,
		method: "POST",
		json: true
	}, function(error, response, body) {

		if (error) {
			return callback(error, null);
		}

		if (response.statusCode !== 200) {
			return callback({
				headers: response.headers,
				statusCode: response.statusCode,
				body: body
			}, null)
		}

		callback(null, body.data);

	})
}

Client.buildUrl = function(resource, options) {
	var url = Client.getBaseUrl() + "/" + resource + "/";

	// TODO: hack for singular resources;
	if (options.address) {
		url += options.address;
	}

	if (options.txHash) {
		url += options.txHash;
	}

	if (options.blockId) {
		url += options.blockId;
	}

	return url
}
