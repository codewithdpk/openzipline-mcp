import axios from "axios";

const GITHUB_RAW_BASE_URL =
  "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-contracts/master/contracts";

export enum ContractsCategories {
  Access = "access",
  Account = "account",
  Finance = "finance",
  Governance = "governance",
  Token = "token",
}

export enum ContractNames {
  ERC20 = "ERC20",
  ERC721 = "ERC721",
  ERC1155 = "ERC1155",
}

export const ContractVariantsOfCategory = {
  [ContractsCategories.Access]: {},
  [ContractsCategories.Account]: {},
  [ContractsCategories.Finance]: {},
  [ContractsCategories.Governance]: {},
  [ContractsCategories.Token]: {
    [ContractNames.ERC20]: "ERC20",
    [ContractNames.ERC721]: "ERC721",
    [ContractNames.ERC1155]: "ERC1155",
  },
};
export async function fetchContractFile({
  contractCategory,
  contractName,
}: {
  contractCategory: ContractsCategories;
  contractName: ContractNames;
}) {
  const url = `${GITHUB_RAW_BASE_URL}/${contractCategory}/${contractName}/${contractName}.sol`;
  const response = await axios.get(url);
  return response.data;
}
