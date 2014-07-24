// tx utils
var _ = require('underscore');
var me = module.exports;

// todo: support multisig
me.getInputAddresses = function(tx) {
  return _.uniq(_.pluck(tx.inputs, 'address'))
}
me.getOutputAddresses = function(tx) {
  return _.uniq(_.pluck(tx.outputs, 'address'))
}

me.getAddresses = function(tx) {
  var inputAddresses = me.getInputAddresses(tx)
  var outputAddresses = me.getOutputAddresses(tx)
  return _.uniq(inputAddresses.concat(outputAddresses))
}

me.getInputAddressValues = function(tx) {
  return _calAddressValues(tx.inputs)
}

me.getOutputAddressValues = function(tx) {
  return _calAddressValues(tx.outputs)
}

function _calAddressValues(items) {
  var addrVals = {};

  items.forEach(function(item) {
    var address = item.address;
    if (address) {
      if (!addrVals[address]) addrVals[address] = 0;
      addrVals[address] = addrVals[address] + item.value;
    }
  })

  return addrVals;
}

me.getAddressValues = function(tx) {
  var inputVals = me.getInputAddressValues(tx);
  var outputVals = me.getOutputAddressValues(tx);

  var addrVals = outputVals;

  var inputAddresses = Object.keys(inputVals);
  inputAddresses.forEach(function(addr) {
    // initialize value
    if (!addrVals[addr]) addrVals[addr] = 0;
    addrVals[addr] = addrVals[addr] - inputVals[addr];
  })

  return addrVals;
}

me.filterIncomingTxs = function(address, txs) {
  var incomings = [];
  txs.forEach(function(tx) {
    var addrVals = me.getAddressValues(tx)
    if (addrVals[address] && addrVals[address] > 0) {
      incomings.push(tx)
    }
  })
  return incomings
}

me.filterOutgoingTxs = function(address, txs) {
  var outgoings = [];
  txs.forEach(function(tx) {
    var addrVals = me.getAddressValues(tx)
    if (addrVals[address] && addrVals[address] < 0) {
      outgoings.push(tx)
    }
  })
  return outgoings

}
