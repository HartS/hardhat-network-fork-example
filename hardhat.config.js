require("@nomicfoundation/hardhat-toolbox");
dotenv = require('dotenv')
dotenv.config()

const { ALCHEMY_API_KEY, FORK_BLOCK } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  namedAccounts: {
    deployer: '0xf2E055D3204aD73C7C51DE2668435B76C727a92f',
  },
  networks: {
    "localfork": {
      url: "http://localhost:8545",
      chainId: 31336,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        blockNumber: FORK_BLOCK || 15645012,
      },
    },
    "hardhat": {
      chainId: 31336,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        blockNumber: FORK_BLOCK || 15645012,,
      },
    },
  },
};
