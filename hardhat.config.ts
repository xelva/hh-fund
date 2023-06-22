import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-solhint";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy"
import "dotenv/config"

const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL!;
const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL!;

const config: HardhatUserConfig = {
  solidity: "0.8.18", 
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [
        PRIVATE_KEY
      ],
      chainId: 11155111
    },
    localhost: {
      url: LOCALHOST_RPC_URL,
      chainId: 31337
    }
  },
};

export default config;
