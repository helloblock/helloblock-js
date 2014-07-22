var expect = require("chai").expect;
var helloblock = require("../lib/helloblock")({
  network: 'testnet',
  debug: true
})

var unspent = {
  confirmations: 101973,
  blockHeight: 168438,
  txHash: "4393b48378cfb1234f8dbd8f9d55ebb4ef61535c8150f7890775ec571d13745c",
  index: 0,
  scriptPubKey: "21034c8dc12f341e907d5c826ee0dd60b3391a0d6c41b9b18d666229dde5adf8d60bac",
  type: "pubkey",
  value: 5000120000,
  hash160: "f69fea6380a70224d5cceb9d8c0bde4b39e186ff",
  address: "n3zz6NdCzNfai7nZvnPB61bimWPYztjriL"
}

var expectedUtxo = {
  "txid": "4393b48378cfb1234f8dbd8f9d55ebb4ef61535c8150f7890775ec571d13745c",
  "vout": 0,
  "address": "n3zz6NdCzNfai7nZvnPB61bimWPYztjriL",
  "scriptPubKey": "21034c8dc12f341e907d5c826ee0dd60b3391a0d6c41b9b18d666229dde5adf8d60bac",
  "amount": 50.00120000,
  "confirmations": 101973,
  "hash160": "f69fea6380a70224d5cceb9d8c0bde4b39e186ff",
  "blockHeight": 168438
}

describe("Bitcoind Format", function() {
  this.timeout(5000);
  it("- unspent (formats utxo into bitcoind format)", function() {
    var utxo = helloblock.format.unspent(unspent);
    expect(utxo).to.deep.equal(expectedUtxo)
  });

  it("- unspents", function() {
    var utxos = helloblock.format.unspents([unspent]);
    expect(utxos).to.deep.equal([expectedUtxo])
  });
});
