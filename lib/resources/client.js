var request = require('request'),
  _ = require('underscore'),
  qs = require('querystring'),
  logfmt = require('logfmt');

function Client(options) {
  options = options || {};
  this.network = options.network || 'mainnet';
  this.version = options.version || 'v1';
  this.debug = options.debug || false;
}

// Options:
// - method {String}: HTTP method to use
// - uri {Array[String]}: API Endpoint
// - body {Array|Object}: JSON request body
// - headers {Object}: Headers you want to set
Client.prototype.request = function(options, callback) {
  var self = this;
  var network = this.network;
  var version = this.version;

  options = options || {};
  var baseUrl = 'https://' + network + '.helloblock.io/' + version + '/'

  query = '';
  if (options.params) {
    var query = qs.stringify(options.params)
    query += '?'
  }

  var t = this.time()
  var requestUrl = baseUrl + options.uri.join('/') + query

  var body = JSON.stringify(options.body) || '{}'
  var r = {
    method: options.method,
    uri: requestUrl,
    body: body,
    headers: {
      'User-Agent': 'HelloBlock Node.JS Client',
      // Note: Must include application/json
      'content-type': 'application/json'
    }
  }
  request(r, function(err, response, body) {
    var code = response.statusCode;
    delete r.headers
    t.log(_.extend(r, {
      err: err ? err.message : 'null',
      code: code
    }))

    try {
      body = JSON.parse(body)
    } catch (e) {
      body = {
        status: 'error',
        message: 'Unexpected Server Error',
        details: []
      }
    }

    body.code = code;

    var resource = {}
    if (body['data']) {
      resource = body['data']
      if (options.resource) resource = resource[options.resource];
    }

    if (!err && code >= 400) {
      err = new Error(body.message)
    }

    callback(err, body, resource)
  })
};

Client.prototype.log = function(args) {
  var self = this;
  if (self.debug) {
    logfmt.log(args);
  }
}

Client.prototype.time = function() {
  var self = this;
  if (self.debug) {
    return logfmt.time();
  }

  return {
    log: function() {}
  }
}

module.exports = {
  Client: Client
}