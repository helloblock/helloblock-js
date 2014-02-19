var mocha = require( "mocha" );
var expect = require( "chai" ).expect;
var HelloBlock = require( "../../lib/HelloBlock" )

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

describe( "Wallet", function() {
  it( "should retrieve the entire wallet", function( done ) {
    var addresses = Fixtures.testnet.addresses
    HelloBlock.Wallet.retrieve( {
      addresses: addresses
    }, function( error, response ) {

      expect( error ).to.equal( null );

      expect( response.summary ).to.exist
      expect( response.latestBlock ).to.exist
      expect( response.transactions ).to.exist
      expect( response.addresses ).to.exist
      expect( response.exchangeRates ).to.exist
      done()
    } );
  } );

  // TODO
  // Test more errors
  // Test params, e.g limit/offset
} );
