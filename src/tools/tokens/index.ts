import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import server from "../../server.js";
import {
  ContractNames,
  ContractsCategories,
  fetchContractFile,
} from "../../utils/githubClient.js";
import { z } from "zod";

export function registerTokensTools(server: McpServer) {
  server.registerTool(
    "get-token-contract",
    {
      description:
        "Get solidity smart contract code of given contract category and and contract name",
      inputSchema: {
        contractCategory: z.enum(
          Object.values(ContractsCategories) as [string, ...string[]]
        ),
        contractName: z.enum(
          Object.values(ContractNames) as [string, ...string[]]
        ),
      },
    },
    async ({ contractCategory, contractName }) => {
      const contract = await fetchContractFile({
        contractCategory: contractCategory as ContractsCategories,
        contractName: contractName as ContractNames,
      });

      return {
        content: [
          {
            type: "text",
            text: `Contract: ${contract}`,
          },
        ],
        status: "success",
      };
    }
  );
}
