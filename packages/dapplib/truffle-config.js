require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn property grace clog swear sell'; 
let testAccounts = [
"0x78078061942265263896ab7f80236cbc9f64b344b86d0ebc87966d1e558dabc5",
"0x9ce919fd4fcf2c48a27bc204659d4bfa7acdcaf42897f8fe2d20bd5840aaf86c",
"0x8b7d16e6d0f41c19e37255038f687877958dd4eefe9ab929110ef7e6853c909a",
"0x6331ffaaecdc6101b877c3ca211f36c00344b37a1d4b456ed4b07882b5018a84",
"0x5a2c72825253c07f2ea30a569f83ff73109ce559e6cfd980b8818b1fc9874041",
"0x76a90f5affb2ff9ddf83e7ddd65ae129e79163f61baec67d7751bc60990e0811",
"0xca487b8ef4818f9739e4739b2bdad4396d21c6673ef0e944f1eba98b401c82da",
"0x843e0086922149dbfb27f23b8570554fc4acbc1ecb2e4ea087b54ea2a82ef4de",
"0x3108701f8913be1851e285042d59262a8729dfbc7b29b9a41948d75e9fd6a9ce",
"0xf8636db0bca978d4a17526a977b78144e9ce7530c5a7cf8a1012461ad2a7a29d"
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

