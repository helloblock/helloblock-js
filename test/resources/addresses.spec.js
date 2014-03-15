var mocha = require("mocha");
var expect = require("chai").expect;
var HelloBlock = require("../../lib/HelloBlock")

HelloBlock.BLOCKCHAIN_NETWORK = "testnet";

// Fixtures
var Fixtures = {
  testnet: {
    addresses: [
      "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo",
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

describe("Addresses", function() {
  it("should retrieve the correct address", function(done) {
    var address = Fixtures.testnet.addresses[0];
    HelloBlock.Addresses.retrieve({
      address: address
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.address.address).to.equal(address);
      done()
    });
  });

  it("should retrieve the correct transactions", function(done) {
    HelloBlock.Addresses.retrieveTransactions({
      address: Fixtures.testnet.addresses[0]
    }, function(error, response) {
      expect(error).to.equal(null);
      expect(response.transactions).to.not.be.empty;
      done()
    })
  });

  it("should retrieve the correct unspents", function(done) {
    HelloBlock.Addresses.retrieveUnspents({
      address: Fixtures.testnet.addresses[0]
    }, function(error, response) {
      expect(error).to.equal(null);
      expect(response.unspents).to.not.be.empty;
      done()
    });

  });

  it("should return appropriate errors", function(done) {
    var address = Fixtures.testnet.addresses[0] + "adsf";
    HelloBlock.Addresses.retrieve({
      address: address
    }, function(error, response) {
      expect(error).to.exist;
      done()
    })

  });

  // TODO
  // Test more errors
  // Test params, e.g limit/offset
});
