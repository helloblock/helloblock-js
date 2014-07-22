var expect = require("chai").expect;
var helloblock = require("../lib/helloblock")({
  network: 'testnet',
  debug: true
});

// Fixtures
var Fixtures = {
  testnet: {
    addresses: [
      "mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L",
      "mjkrZkGsM8XjqbH5Gvg7knMPEb5UBLCTDL",
    ]
  },
  mainnet: {
    addresses: [
      "168vRbBhSSQdQnyHH4ZUW8K3B65QjUQ4xJ",
      "16ps38WzmDhEWMPQecVndrWZADekC4FU42",
      "1FRzSRgPffe5A7F4ySgpeQzEDahDp1EtQx",
    ]
  }
}

describe("Wallet", function() {
  this.timeout(10000);
  it("- get", function(done) {
    var addresses = Fixtures.testnet.addresses
    helloblock.wallet.get(addresses, function(err, resp, resource) {
      expect(err).to.equal(null);
      expect(resource.summary).to.exist
      expect(resource.transactions).to.exist
      expect(resource.addresses).to.exist
      done()
    });
  });

  // TODO
  // Test more errors
  // Test params, e.g limit/offset
});
