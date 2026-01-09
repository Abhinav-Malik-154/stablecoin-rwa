import { ethers } from "ethers";

// RPC URL for local Anvil
const RPC_URL = "http://anvil:8545";


export async function getBlockchainInfo() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);

  const network = await provider.getNetwork();

  return {
    chainId: network.chainId.toString(),
    name: network.name,
  };
}
