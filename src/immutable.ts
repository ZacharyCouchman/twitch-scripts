import { blockchainData, config as imtblConfig } from "@imtbl/sdk"
import { config } from "dotenv";
config();

export const environment = process.env.ENVIRONMENT === imtblConfig.Environment.PRODUCTION
  ? imtblConfig.Environment.PRODUCTION
  : imtblConfig.Environment.SANDBOX;

export const chainName = environment === imtblConfig.Environment.PRODUCTION
  ? 'imtbl-zkevm-mainnet'
  : 'imtbl-zkevm-testnet'

export const rpcURL = environment === imtblConfig.Environment.PRODUCTION
  ? 'https://rpc.immutable.com'
  : 'https://rpc.testnet.immutable.com'

const baseConfig = new imtblConfig.ImmutableConfiguration({
  environment: environment,
  publishableKey: process.env.PUBLISHABLE_KEY,
  apiKey: process.env.API_KEY,
})

export const zkEvmData = new blockchainData.BlockchainData({
  baseConfig: baseConfig
})