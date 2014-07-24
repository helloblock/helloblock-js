var expect = require("chai").expect;
var helloblock = require("../lib/helloblock")({
  network: 'testnet',
  debug: true
})

var txs = [{
  txHash: "8ca0f9a17458a0acfdaaedb6696e33d4c22209b03741e5632fd2fdfafc38a0c3",
  version: 1,
  locktime: 0,
  size: 372,
  blockHash: "000000006328f486fcde947b8d7e58e0f4026e747811b8125987e0a02237207b",
  blockHeight: 270618,
  blockTime: 1406173158,
  estimatedTxTime: 1406170167,
  confirmations: 4,
  inputsCount: 2,
  outputsCount: 2,
  inputs: [{
    prevTxHash: "08fb6bc55c0caaf7694763b38aa1ac467f4f143c6e2258bf5a7cd27f452cfae6",
    prevTxoutIndex: 1,
    prevTxoutType: "pubkeyhash",
    value: 1080000,
    address: "mgW26RSFM1igEMAGejp8AdsE1mM9P1WyMD",
    hash160: "0acae1a6404037b8d56d66dfa23d8d278c0fdfa0",
    scriptSig: "473044022074568cdd3ef8d070c177460d1254fa5635fd20f647283f35e6a994a0ae109f840220748cc1d82a3950ff1809c4a58087ff1e300bad21b85bef8476ee93d83e57fbd4012102aee9f712cfbdb2468c26daa090fed3676c977856fbc5916115d4992fb8872448",
    scriptSigASM: "3044022074568cdd3ef8d070c177460d1254fa5635fd20f647283f35e6a994a0ae109f840220748cc1d82a3950ff1809c4a58087ff1e300bad21b85bef8476ee93d83e57fbd401 02aee9f712cfbdb2468c26daa090fed3676c977856fbc5916115d4992fb8872448"
  }, {
    prevTxHash: "541d34a23febced3a03d8c35e4876a071a138ae4613ef19da508adb2b3f76ba5",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1000000,
    address: "miepAE8NEP9C4aEdf1jSdMJKhTvdUwUtVK",
    hash160: "2264ea11d4b5522ce5cf09fcf89bfb5a890d96e8",
    scriptSig: "473044022033e5f46486c2c78f1632fcb06d719c6c1325ba1c146d965c7437095e9f99e78f02207b9df29c11a4c4ba9506c605061eb1a9350a4550873ebcd813c2e86dccd1a74701210256ea27f95ebfb242a49bfbecb0f86d62402138dc93c51c9da5f6e8316992d7b5",
    scriptSigASM: "3044022033e5f46486c2c78f1632fcb06d719c6c1325ba1c146d965c7437095e9f99e78f02207b9df29c11a4c4ba9506c605061eb1a9350a4550873ebcd813c2e86dccd1a74701 0256ea27f95ebfb242a49bfbecb0f86d62402138dc93c51c9da5f6e8316992d7b5"
  }],
  outputs: [{
    index: 0,
    value: 1070000,
    scriptPubKey: "76a914d472f22400ccc3bc52aedf985ef1a3b7216b81b288ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 d472f22400ccc3bc52aedf985ef1a3b7216b81b2 OP_EQUALVERIFY OP_CHECKSIG",
    address: "mztHFJPMn7xPxGMe61jGNFTgMSoFZ75LtY",
    hash160: "d472f22400ccc3bc52aedf985ef1a3b7216b81b2",
    type: "pubkeyhash",
    spent: true,
    nextTxHash: "c49e2b254859acd8d28c201631db0039c97cfa76058348b8f9ba9c91d5113f60",
    nextTxinIndex: 1
  }, {
    index: 1,
    value: 1000000,
    scriptPubKey: "76a9143043100177eefebf9faef7de92d00e367374136988ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 3043100177eefebf9faef7de92d00e3673741369 OP_EQUALVERIFY OP_CHECKSIG",
    address: "mjv94r7fgD5qwUFtgLgK5nfRqYN3SrvGJW",
    hash160: "3043100177eefebf9faef7de92d00e3673741369",
    type: "pubkeyhash",
    spent: false,
    nextTxHash: null,
    nextTxinIndex: null
  }],
  totalInputsValue: 2080000,
  totalOutputsValue: 2070000,
  fees: 10000,
  estimatedTxDirection: "outgoing",
  estimatedTxValue: -2070000
}, {
  txHash: "541d34a23febced3a03d8c35e4876a071a138ae4613ef19da508adb2b3f76ba5",
  version: 1,
  locktime: 0,
  size: 260,
  blockHash: "0000000077cd5a1262f30df2f757504c79b4b711b7385a04346f5f1c750d02da",
  blockHeight: 270611,
  blockTime: 1406164633,
  estimatedTxTime: 1406161689,
  confirmations: 11,
  inputsCount: 1,
  outputsCount: 3,
  inputs: [{
    prevTxHash: "88ede5d3c10ca35dce39929db44da4133adaf50049e5d8fe854c6bd20b7123e7",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 88012937,
    address: "mu2dpDBFWxZNvCQbuf5vmoHH43uDzSVmf2",
    hash160: "9436b00b0eacb2b5058f007448d1172c51f88941",
    scriptSig: "483045022100918427931de2c3a1a05b2ceccd0c3b161ab2b9f0a00505b667b932c75a2c8c4602203eb57baaf58084491e1339e59c041c643dc86f2f62c578d6a6c7c4f98135b5f401210226023b3432735ffd4a2495bbdc2ebc0eebba1fa2d8ebf0376f2e2a07f89ffc5e",
    scriptSigASM: "3045022100918427931de2c3a1a05b2ceccd0c3b161ab2b9f0a00505b667b932c75a2c8c4602203eb57baaf58084491e1339e59c041c643dc86f2f62c578d6a6c7c4f98135b5f401 0226023b3432735ffd4a2495bbdc2ebc0eebba1fa2d8ebf0376f2e2a07f89ffc5e"
  }],
  outputs: [{
    index: 0,
    value: 1000000,
    scriptPubKey: "76a9142264ea11d4b5522ce5cf09fcf89bfb5a890d96e888ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 2264ea11d4b5522ce5cf09fcf89bfb5a890d96e8 OP_EQUALVERIFY OP_CHECKSIG",
    address: "miepAE8NEP9C4aEdf1jSdMJKhTvdUwUtVK",
    hash160: "2264ea11d4b5522ce5cf09fcf89bfb5a890d96e8",
    type: "pubkeyhash",
    spent: true,
    nextTxHash: "8ca0f9a17458a0acfdaaedb6696e33d4c22209b03741e5632fd2fdfafc38a0c3",
    nextTxinIndex: 1
  }, {
    index: 1,
    value: 1000000,
    scriptPubKey: "76a914123f6195c39f234f2b1082868928d4240f96178d88ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 123f6195c39f234f2b1082868928d4240f96178d OP_EQUALVERIFY OP_CHECKSIG",
    address: "mhBSPJtvg7hTtPctLje31vvdU93T8tAr1L",
    hash160: "123f6195c39f234f2b1082868928d4240f96178d",
    type: "pubkeyhash",
    spent: false,
    nextTxHash: null,
    nextTxinIndex: null
  }, {
    index: 2,
    value: 86002937,
    scriptPubKey: "76a9144ffbf2fa32d590df099185f6a241ef51f118a64088ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 4ffbf2fa32d590df099185f6a241ef51f118a640 OP_EQUALVERIFY OP_CHECKSIG",
    address: "mnosVwY5KD4qVioirJppzG8fionHnzDLSP",
    hash160: "4ffbf2fa32d590df099185f6a241ef51f118a640",
    type: "pubkeyhash",
    spent: false,
    nextTxHash: null,
    nextTxinIndex: null
  }],
  totalInputsValue: 88012937,
  totalOutputsValue: 88002937,
  fees: 10000,
  estimatedTxDirection: "incoming",
  estimatedTxValue: 1000000
}, {
  txHash: "6b19ed0431f1c0d89a2492f623fc2436843ea765b68e91979bdcb3a5da43e083",
  version: 1,
  locktime: 0,
  size: 814,
  blockHash: "00000000b15e790475169a896a32ac6511399cb5425d7ea28e91223d853ee8f0",
  blockHeight: 270608,
  blockTime: 1406160980,
  estimatedTxTime: 1406157052,
  confirmations: 14,
  inputsCount: 5,
  outputsCount: 2,
  inputs: [{
    prevTxHash: "eae9daba7d709dd4b1d516f26e8f9f44b06339ac29f6c139474365faf6468f2d",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 2800000,
    address: "mkddFPbQp8aMdycFLtbGbB3REhKX9jqysh",
    hash160: "381ba454742b072b1d4c5038d8a6306d9b489250",
    scriptSig: "473044022069e51934a6d8e8ba9b337ac54bbce856cd0223626b50a44baf707a9b23cc6f5f022066f3011896b641ea10687e163ef0bcb6204ec1735b7b9626010cdc74f814c7d501210286dea57d70a79c3a868b091615ca4788fa346dc3a4455dfe1aee7fb6b05b83d0",
    scriptSigASM: "3044022069e51934a6d8e8ba9b337ac54bbce856cd0223626b50a44baf707a9b23cc6f5f022066f3011896b641ea10687e163ef0bcb6204ec1735b7b9626010cdc74f814c7d501 0286dea57d70a79c3a868b091615ca4788fa346dc3a4455dfe1aee7fb6b05b83d0"
  }, {
    prevTxHash: "7ceaf7b000c5827a503b26ed13745f6ab7228b465c1faef00ef502fd9eeb81d3",
    prevTxoutIndex: 1,
    prevTxoutType: "pubkeyhash",
    value: 1000000,
    address: "miepAE8NEP9C4aEdf1jSdMJKhTvdUwUtVK",
    hash160: "2264ea11d4b5522ce5cf09fcf89bfb5a890d96e8",
    scriptSig: "4730440220357f90eed52adad47fca2bcc256fc758796960be8cc49b382c0240846364b2c60220426239303ebd59962f2d1b281bec1718ad0d80aa08f4813da8656ddaf4ef462901210256ea27f95ebfb242a49bfbecb0f86d62402138dc93c51c9da5f6e8316992d7b5",
    scriptSigASM: "30440220357f90eed52adad47fca2bcc256fc758796960be8cc49b382c0240846364b2c60220426239303ebd59962f2d1b281bec1718ad0d80aa08f4813da8656ddaf4ef462901 0256ea27f95ebfb242a49bfbecb0f86d62402138dc93c51c9da5f6e8316992d7b5"
  }, {
    prevTxHash: "55b15eaa1552a888b6e91c623bc6026e579037252a347768b8401485463e51d8",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1640000,
    address: "mumEHUPMEJ6KUxQJVxSNBv9b3FpWqq2nJa",
    hash160: "9c44eea4d6812d0a7ee56f795e9d626ac42cb109",
    scriptSig: "473044022002fd4efb35df364895d558b4411efab8125117f19b818d8e7ffb63a4ac91ba8b0220249c0a76e4da5d42d21f2155728d6a06d50d301678b842178356568133659944012103113c6d8eee9293d1af17b488becc2ae7a0a932dd1f257784158029dfdad0e88a",
    scriptSigASM: "3044022002fd4efb35df364895d558b4411efab8125117f19b818d8e7ffb63a4ac91ba8b0220249c0a76e4da5d42d21f2155728d6a06d50d301678b84217835656813365994401 03113c6d8eee9293d1af17b488becc2ae7a0a932dd1f257784158029dfdad0e88a"
  }, {
    prevTxHash: "2fe6f9f7fa9b999fe33de5b93d016a4221d73e96358ef005cb63b61f30956526",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1390000,
    address: "myo6ggPjsU3Dvkr2vgt26JF6khmFWUX3vC",
    hash160: "c87fec56f4924bb051c11e1760409161edaaff31",
    scriptSig: "4730440220348f3a15cf88a9d724d5afd415e8576f983e4c78e3428e8a1403b4364f12c17102203089e9e5f214f98ff8d53fcba357ad5f2571b5250eb4cf9d75b1bcf766875b9a0121021e25e17c318d12c1e11fafd31dfe376bcc31859e79fed3f50aad4fb82b07fe1c",
    scriptSigASM: "30440220348f3a15cf88a9d724d5afd415e8576f983e4c78e3428e8a1403b4364f12c17102203089e9e5f214f98ff8d53fcba357ad5f2571b5250eb4cf9d75b1bcf766875b9a01 021e25e17c318d12c1e11fafd31dfe376bcc31859e79fed3f50aad4fb82b07fe1c"
  }, {
    prevTxHash: "1c17eebf27d6b6d42edd90742d4572d34aa1d2eb61823cb550bf3175f1d758e0",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1900000,
    address: "n4CAP5k1bTkbWpjKTkQ71Gwpfatj1qcLkH",
    hash160: "f8bd1447d6d2691c60a6f7fbcb5ecc1ab1fae26c",
    scriptSig: "483045022100c931ec597f7967a1dc07b070cd72a39452bac610a5a1c80da7026a61c4ed33ab02202076bdbd01d17eec0c76fd4699140d8ae6b46966ebae0d427158c407498e0176012103e5158e1ed99542013843bc7f897584cc8c3b59567c7f1a4678488de0d372a0b9",
    scriptSigASM: "3045022100c931ec597f7967a1dc07b070cd72a39452bac610a5a1c80da7026a61c4ed33ab02202076bdbd01d17eec0c76fd4699140d8ae6b46966ebae0d427158c407498e017601 03e5158e1ed99542013843bc7f897584cc8c3b59567c7f1a4678488de0d372a0b9"
  }],
  outputs: [{
    index: 0,
    value: 7700000,
    scriptPubKey: "76a91404e7870070f954e266aecd9e74f036e70f2c101b88ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 04e7870070f954e266aecd9e74f036e70f2c101b OP_EQUALVERIFY OP_CHECKSIG",
    address: "mfxtMd8J7tD29ZxLfpbXNbqj8vfCTNDdL6",
    hash160: "04e7870070f954e266aecd9e74f036e70f2c101b",
    type: "pubkeyhash",
    spent: false,
    nextTxHash: null,
    nextTxinIndex: null
  }, {
    index: 1,
    value: 1020000,
    scriptPubKey: "76a914bbdf8c39c9378108d694d07549f2acc4332df54988ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 bbdf8c39c9378108d694d07549f2acc4332df549 OP_EQUALVERIFY OP_CHECKSIG",
    address: "mxeLTJAWvS8WSRNnKYgdjKF5iAPWocAwat",
    hash160: "bbdf8c39c9378108d694d07549f2acc4332df549",
    type: "pubkeyhash",
    spent: true,
    nextTxHash: "b2c3d4f1b26796e802c697c3ab2794b2fc8c5cf7533239ce385fd03e7434e790",
    nextTxinIndex: 1
  }],
  totalInputsValue: 8730000,
  totalOutputsValue: 8720000,
  fees: 10000,
  estimatedTxDirection: "outgoing",
  estimatedTxValue: -8720000
}, {
  txHash: "7ceaf7b000c5827a503b26ed13745f6ab7228b465c1faef00ef502fd9eeb81d3",
  version: 1,
  locktime: 0,
  size: 850,
  blockHash: "00000000a713f29560ea3e96130b11e0b86fdc5662dc55b7d8fea1855113ad3b",
  blockHeight: 270600,
  blockTime: 1406151273,
  estimatedTxTime: 1406148259,
  confirmations: 22,
  inputsCount: 5,
  outputsCount: 3,
  inputs: [{
    prevTxHash: "89d1ccf5ca3d193e2786eaa76413c13ff9ae57b45743d55e1bd6b90ad38a26a0",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1100000,
    address: "miiRyAhDPtStraMesNYsakVqGkpwt3in7U",
    hash160: "23140de91e79758264c5d181540f8dc26284d46b",
    scriptSig: "483045022100e6f05c4b05270e2d606fd9a1137016783d7ad7c5923adaf60c09803598848c5c0220446c3f8c8a63d4c9584c22ccb523116ba717a58a6cd7754dd069985877f98c0b0121024aa76189e64686c2ea8d1b59bf291eff6f2bd177390f0997141e2d5e5c120ee2",
    scriptSigASM: "3045022100e6f05c4b05270e2d606fd9a1137016783d7ad7c5923adaf60c09803598848c5c0220446c3f8c8a63d4c9584c22ccb523116ba717a58a6cd7754dd069985877f98c0b01 024aa76189e64686c2ea8d1b59bf291eff6f2bd177390f0997141e2d5e5c120ee2"
  }, {
    prevTxHash: "ca987e579dde58ba743399d5cd71a88f3a2b455dc47aff24077b5a7b83be4c24",
    prevTxoutIndex: 2,
    prevTxoutType: "pubkeyhash",
    value: 1000000,
    address: "mpnLCMaXvT39HyiPuJYPijouD5R57hTY7x",
    hash160: "65a1a775df6cb6641a274824538f485e0816dbcd",
    scriptSig: "483045022100ac30a6ecf13cf2e84fc1db6775498120766d9d7bb42ae0eafe25075cb7b868b902207e6d1d48d3f3828e61b0b1b2d199c406d2f47d76e705521ba385b8a1c21d219901210387b5608e7de7085c6a7c93d2fa4e4f0fb798d93e397856d18cb8a82945914084",
    scriptSigASM: "3045022100ac30a6ecf13cf2e84fc1db6775498120766d9d7bb42ae0eafe25075cb7b868b902207e6d1d48d3f3828e61b0b1b2d199c406d2f47d76e705521ba385b8a1c21d219901 0387b5608e7de7085c6a7c93d2fa4e4f0fb798d93e397856d18cb8a82945914084"
  }, {
    prevTxHash: "cf18235759cf6c7b8cfb16abc5bcf5fcfaf41014b9323e4b1741a90fad1bfdf1",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1050000,
    address: "mnaUV2xjGkG7Fuvc6N1tBAwpec1YaSfAE5",
    hash160: "4d7354430583292935fbc501157d863f72a449d1",
    scriptSig: "473044022016004b7f635f787aa378182bb8a41331660dc55549b56815f12c9861bd18d259022034eaf1c6fcbfcf1a6e7e6adfe64cb2e2706c7dbbebfea619a4ac498305473735012103886ba73200de7fec5eabfe01e669cb0528fdae3bf599d3b881780be55a3a0b51",
    scriptSigASM: "3044022016004b7f635f787aa378182bb8a41331660dc55549b56815f12c9861bd18d259022034eaf1c6fcbfcf1a6e7e6adfe64cb2e2706c7dbbebfea619a4ac49830547373501 03886ba73200de7fec5eabfe01e669cb0528fdae3bf599d3b881780be55a3a0b51"
  }, {
    prevTxHash: "e38e7378e79f3b4a9b4e47a920036874b885135aba263898c38baa8c7edea32c",
    prevTxoutIndex: 1,
    prevTxoutType: "pubkeyhash",
    value: 2200000,
    address: "n4Kp9ccoK4Z5G1VbhyGhdL1No4KDMWW1fq",
    hash160: "fa2f8496b4821305b97231ac1170d8beb6c2c996",
    scriptSig: "473044022064dc5b46b964aa191842c7d3f481e4e78779a8f9a4fbc075d3be4f5f422f56370220776d68959cfe5233ba975402cc7b6420f30a3c0d3f18e55ce0768b38b737ca7c0121030308b372316ad71b3b6df6ec6368cf71267360637f5928369f9393db73fe57be",
    scriptSigASM: "3044022064dc5b46b964aa191842c7d3f481e4e78779a8f9a4fbc075d3be4f5f422f56370220776d68959cfe5233ba975402cc7b6420f30a3c0d3f18e55ce0768b38b737ca7c01 030308b372316ad71b3b6df6ec6368cf71267360637f5928369f9393db73fe57be"
  }, {
    prevTxHash: "90f6fc82bec530ef70503338fd6076711b88e779e65a343c3c0f34ed70696e28",
    prevTxoutIndex: 0,
    prevTxoutType: "pubkeyhash",
    value: 1180000,
    address: "miJTru6NtSMokQpBMkAoC2VjcJLWbQjb3v",
    hash160: "1e8ba68a2c7d0baf6321256d800c6a27944b58f0",
    scriptSig: "483045022100d7b2e9c40342a81b1581b87fee686d315e0ea70952d7383dfd068360c3d6dacb02204822c06985c911e096e167d74d4dc0fb2c322f55e43aa880ba35deae365f1d7d01210330e1aabe2347bbe2b32ed207f03579612db783b7a14a75c8202b3a44f277da0e",
    scriptSigASM: "3045022100d7b2e9c40342a81b1581b87fee686d315e0ea70952d7383dfd068360c3d6dacb02204822c06985c911e096e167d74d4dc0fb2c322f55e43aa880ba35deae365f1d7d01 0330e1aabe2347bbe2b32ed207f03579612db783b7a14a75c8202b3a44f277da0e"
  }],
  outputs: [{
    index: 0,
    value: 1020000,
    scriptPubKey: "76a914eee2159e864675c43b6752fff8748680a71ef18888ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 eee2159e864675c43b6752fff8748680a71ef188 OP_EQUALVERIFY OP_CHECKSIG",
    address: "n3J3xLFHAe1PERAQAihEu5BxwUw1MHYf9n",
    hash160: "eee2159e864675c43b6752fff8748680a71ef188",
    type: "pubkeyhash",
    spent: true,
    nextTxHash: "d0f187ca19cd35130d6bbd9770dfdb91fe8e30914981da62ae3ac78b41c03256",
    nextTxinIndex: 0
  }, {
    index: 1,
    value: 1000000,
    scriptPubKey: "76a9142264ea11d4b5522ce5cf09fcf89bfb5a890d96e888ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 2264ea11d4b5522ce5cf09fcf89bfb5a890d96e8 OP_EQUALVERIFY OP_CHECKSIG",
    address: "miepAE8NEP9C4aEdf1jSdMJKhTvdUwUtVK",
    hash160: "2264ea11d4b5522ce5cf09fcf89bfb5a890d96e8",
    type: "pubkeyhash",
    spent: true,
    nextTxHash: "6b19ed0431f1c0d89a2492f623fc2436843ea765b68e91979bdcb3a5da43e083",
    nextTxinIndex: 1
  }, {
    index: 2,
    value: 4500000,
    scriptPubKey: "76a91481f5fb641d1a46be6a8752ed93e53010c728d25488ac",
    scriptPubKeyASM: "OP_DUP OP_HASH160 81f5fb641d1a46be6a8752ed93e53010c728d254 OP_EQUALVERIFY OP_CHECKSIG",
    address: "msN88vq1KPCP3pRfTmRSbQDemq4oapvT4C",
    hash160: "81f5fb641d1a46be6a8752ed93e53010c728d254",
    type: "pubkeyhash",
    spent: true,
    nextTxHash: "b96b3098d67bee4256473c4a2fea462659c2827d0ff9ed8c4d01dcb1caa0257e",
    nextTxinIndex: 1
  }],
  totalInputsValue: 6530000,
  totalOutputsValue: 6520000,
  fees: 10000,
  estimatedTxDirection: "incoming",
  estimatedTxValue: 1000000
}]

describe("Transaction utilities", function() {
  this.timeout(5000);
  it("- filtering", function() {
    var incomings = helloblock.utils.filterIncomingTxs('miepAE8NEP9C4aEdf1jSdMJKhTvdUwUtVK', txs)
    expect(incomings.length).to.equal(2);

    incomings.forEach(function(tx) {
      expect(tx.estimatedTxDirection).to.equal("incoming")
    })

    var outgoings = helloblock.utils.filterOutgoingTxs('miepAE8NEP9C4aEdf1jSdMJKhTvdUwUtVK', txs)
    expect(outgoings.length).to.equal(2);
    outgoings.forEach(function(tx) {
      expect(tx.estimatedTxDirection).to.equal("outgoing")
    })
  });
});
