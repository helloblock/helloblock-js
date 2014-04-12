var endpoints = ['transactions', 'addresses', 'blocks', 'faucet', 'wallet'];

function createClient(options) {
  var client = {};
  client.options = options;

  endpoints.forEach(function(k) {
    var r = require('./resources/' + k);
    client[k] = new r(options);
  });

  return client;
}

module.exports = createClient;