var mocha = require("mocha");
var expect = require("chai").expect;
var request = require("request");
var HelloBlock = require("../../lib/HelloBlock")

HelloBlock.BLOCKCHAIN_NETWORK = "testnet";

// Fixtures
var Fixtures = {
  mainnet: {
    txHashes: [
      "dc55d9c6ec03ceccf0db43d29e7d626a8b107f41066e3917f30398bb01dda2b5",
      "f5ab129013a36054ec2ebb69abf7b66499d40666eb07a69d9c70c4479953c0ba",
      "ada73586930f9f1a0258bdbb917ac5edd9344914e5228bc48ef9b6060ff15ba7"
    ]
  },
  testnet: {
    txHashes: [
      "6eac9bda811da623378e50d0ec4ac8fcc1192754c39c646ed8fd502d72074aae",
      "6aa623b868a65afab454db70db240f0b36eeb24952ccf21429e393c81568cdd7",
      "176607d80d0a6c8297838f47676c44c9359204b48c5468a48a34e59a63060c3e",
    ],
    rawTxHex: "0100000001c4f11e036c923928890eee3adf84d9dbbd7852c2abd8add118a011d370aaf7a8010000008b48304502200aab7848b6d7ce27f23f46e5e84949e522cd057db9625a227c1e61445fd46069022100d00abfeaadfdf8022437e18069bbc4f32656f649f089f19bef9ed2692da9728a014104e1934263e84e202ebffca95246b63c18c07cd369c4f02de76dbd1db89e6255dacb3ab1895af0422e24e1d1099e80f01b899cfcdf9b947575352dbc1af57466b5ffffffff02404b4c00000000001976a914a5319d469e1ddd9558bd558a50e95f74b3da58c988ac7092b122010000001976a914cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf88ac00000000"
  }
}

describe("Transactions", function() {
  it("should retrieve the correct transaction", function(done) {
    var txHash = Fixtures.testnet.txHashes[0];
    HelloBlock.Transactions.retrieve({
      txHash: txHash
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.transaction.txHash).to.equal(txHash);
      done()
    });
  });

  it("should retrieve batch transactions", function(done) {
    var txHashes = Fixtures.testnet.txHashes;
    HelloBlock.Transactions.retrieveBatch({
      txHashes: txHashes
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.transactions).to.exist;
      done()
    });
  })

  it("should retrieve latest transactions", function(done) {
    HelloBlock.Transactions.retrieveLatest({}, function(error, response) {

      expect(error).to.equal(null);
      expect(response.transactions).to.not.be.empty
      done()
    });
  })

  it("should decode a raw transaction", function(done) {
    var rawTxHex = Fixtures.testnet.rawTxHex;
    HelloBlock.Transactions.decode({
      rawTxHex: rawTxHex
    }, function(error, response) {

      expect(error).to.equal(null);
      expect(response.transaction).to.exist
      done()
    });
  })

  it("should send a raw transaction", function(done) {
    request({
      url: "https://testnet.helloblock.io/faucet/random",
      qs: {
        toAddress: "mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo"
      },
      method: "GET",
      json: true
    }, function(err, response, body) {
      rawTxHex = body.data.rawTxHex;

      HelloBlock.Transactions.propagate({
        rawTxHex: rawTxHex
      }, function(error, response) {

        expect(error).to.equal(null);
        expect(response.transaction).to.exist
        done()
      });
    })
  })

  // TODO
  // Test more errors
  // Test params, e.g limit/offset
});
