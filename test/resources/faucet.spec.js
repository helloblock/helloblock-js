var mocha = require("mocha");
var expect = require("chai").expect;
var HelloBlock = require("../../lib/HelloBlock")

HelloBlock.BLOCKCHAIN_NETWORK = "testnet";

describe("Faucet", function() {
  it("should retrieve random key with unspents", function(done) {
    HelloBlock.Faucet.retrieve({
      type: 1
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.address).to.exist;
      expect(response.privateKeyBase58Uncompressed).to.exist;
      expect(response.unspents).to.not.be.empty;
      done()
    });
  });

  it("should withraw to an address with certain amount", function(done) {
    HelloBlock.Faucet.withdraw({
      toAddress: "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo",
      amount: 10000
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.txHash).to.exist
      expect(response.toAddress).to.equal("mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo")
      expect(response.amount).to.equal(10000)
      done()
    });
  });

  it("should retrieve random", function(done) {
    HelloBlock.Faucet.random({
      toAddress: "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo"
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.rawTxHex).to.exist
      done()
    });
  })

  it("should return stats", function(done) {
    HelloBlock.Faucet.stats({}, function(error, response) {

      expect(error).to.equal(null);
      expect(response).to.exist
      done()
    });

  });
});
