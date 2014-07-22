var SATOSHIS = 100000000;

// bitcoind format
module.exports.unspent = function(unspent) {
  return module.exports.unspents([unspent])[0]
}

module.exports.unspents = function(unspents) {
  return unspents.map(function(unspent) {
    return {
      txid: unspent.txHash,
      vout: unspent.index,
      address: unspent.address,
      scriptPubKey: unspent.scriptPubKey,
      amount: unspent.value / SATOSHIS,
      confirmations: unspent.confirmations,

      hash160: unspent.hash160,
      blockHeight: unspent.blockHeight
    }
  })
}

module.exports.tx = function() {}
module.exports.txs = function() {}
