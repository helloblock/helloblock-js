'use strict';

var HelloBlock = {};
module.exports = HelloBlock

HelloBlock.BLOCKCHAIN_NETWORK = "testnet" // or 'mainnet'

HelloBlock.Addresses = require('./resources/Addresses')
HelloBlock.Transactions = require('./resources/Transactions')
HelloBlock.Blocks = require('./resources/Blocks')
HelloBlock.Wallet = require('./resources/Wallet')
HelloBlock.Faucet = require('./resources/Faucet')
