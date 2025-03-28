import { blockchainData } from "@imtbl/sdk";
import { zkEvmData, chainName } from "./immutable";

{/** https://docs.immutable.com/products/zkEVM/minting/minting-api */ }

export async function mintByMintingAPI(ref: string, to: string, contractAddress: string): Promise<blockchainData.Types.CreateMintRequestResult> {
  console.log(`Requesting mint with unique reference ${ref}`);

  const result = await zkEvmData.createMintRequest({
    chainName: chainName,
    contractAddress: contractAddress,
    createMintRequestRequest: {
      assets: [
        {
          reference_id: ref,
          owner_address: `${to}`,
          // amount: 1 // used when minting ERC1155 tokens, specifies the quantity of tokens to mint for that ID
        },
      ]
    }
  })
  // console.log(result);
  return result;
}