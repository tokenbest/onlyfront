import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import getRpcUrl from 'utils/getRpcUrl'

const RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545";
// const RPC_URL = "http://127.0.0.1:8545";
// getRpcUrl()
console.log(`rpcurl----------->${RPC_URL}`);
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount }
export default web3NoAccount
