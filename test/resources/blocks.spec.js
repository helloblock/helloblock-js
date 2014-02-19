var mocha = require( "mocha" );
var expect = require( "chai" ).expect;
var HelloBlock = require( "../../lib/HelloBlock" )

HelloBlock.BLOCKCHAIN_NETWORK = "testnet";

// Fixtures
var Fixtures = {
  testnet: {
    blockIds: [
      132412,
      13242,
      32412,
    ]
  },
  mainnet: {
    blockIds: [
      132412,
      12412,
      32412,
    ]
  }
}

describe( "Blocks", function() {
  it( "should retrieve the correct block", function( done ) {
    var blockId = Fixtures.testnet.blockIds[ 0 ];
    HelloBlock.Blocks.retrieve( {
      blockId: blockId
    }, function( error, response ) {

      expect( error ).to.equal( null );
      expect( response.block.blockHeight ).to.equal( blockId );
      done()
    } );
  } );

  it( "should retrieve latest blocks", function( done ) {
    HelloBlock.Blocks.retrieveLatest( {}, function( error, response ) {

      expect( error ).to.equal( null );
      expect( response.blocks ).to.not.be.empty
      done()
    } );
  } )

  // TODO: block/:id/transactions current breaks HelloBlockClient
  it( "should retrieve the correct transactions", function( done ) {
    HelloBlock.Blocks.retrieveTransactions( {
      blockId: Fixtures.testnet.blockIds[ 0 ]
    }, function( error, response ) {
      expect( error ).to.equal( null );
      expect( response.transactions ).to.not.be.empty;
      done()
    } )
  } );

  it( "should return appropriate errors", function( done ) {
    var blockId = 999999
    HelloBlock.Blocks.retrieve( {
      blockId: blockId
    }, function( error, response ) {
      expect( error ).to.exist;
      done()
    } )

  } );

  // TODO
  // Test more errors
  // Test params, e.g limit/offset
} );
