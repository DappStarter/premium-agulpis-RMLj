require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note machine upgrade hockey local fresh genius'; 
let testAccounts = [
"0x64a6e035424da1b55f5027c93cf20578161ce913d3ed61e74d3e100164b2eb4b",
"0x3ab0ac7f2379bf5a92aea227d44a4a1558bd2a32ce9c6cc94ab7bdc8679b30ad",
"0x90b924f004e036a2c1b8fdbab3cf659448f1ca4034daf0bfebe3da0dd2ae005c",
"0x19f487df02e70c53583dc5080008c7db43ab026a441b48658cd8b44792ca42f7",
"0x18ac0dc43b610d5db3ae5d6ef83665dcd0ebdd9b71a1acf0c41c8b1a4719a41b",
"0x4eb97ec516b3d6fe4c1d1b2c8af52eda26670330e687a715e4316a9fac561ea3",
"0xb9ff9fa90fee0ebfba577915c87aeeb5c5fefc3ca5854cf2a2913fe2fc12126d",
"0xfe14512a8ecb4bccfded8e94f64885005f3b57c2b55dd03a19281c9b9778da1e",
"0x58d718d4e1909ee8a012eefcec41efa000bc31d64ebe867b5c1e614f480614f0",
"0x5755583d9baa77122aa21af41627a704eabe5cf733c754e314cb2e267189158a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

