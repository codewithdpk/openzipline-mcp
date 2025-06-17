# openzippelin-mcp

openzippelin-mcp is a Model Context Protocol (MCP) server that provides easy access to secure, standards-compliant smart contract templates. It is designed for use with Claude for Desktop and other MCP-compatible clients, enabling users to generate and retrieve token and governance contracts on demand.

---

## What is openzippelin-mcp?

openzippelin-mcp exposes tools for generating and retrieving smart contract templates, including:
- ERC20, ERC721, and ERC1155 token contracts
- Access control, account management, finance, and governance contracts

It fetches templates from OpenZeppelin and can be extended to support more contract types. The server is designed for seamless integration with LLM-powered clients, making it easy for users to get production-ready Solidity code for a variety of blockchain use cases.

---

## Capabilities

- **Token Contracts**: Instantly generate ERC20, ERC721, and ERC1155 contracts with custom names, symbols, and supply caps.
- **Access Control**: Retrieve templates for role-based permissions and admin/minter roles.
- **Account Management**: Get contracts for account abstraction, multi-signature wallets, and DAOs.
- **Finance**: Access escrow, lending, and pooled investment contract templates.
- **Governance**: Generate DAO governance, proposal, and voting contracts.

---

## Use Cases

- Quickly bootstrap a new token or NFT project with secure, audited contract templates.
- Retrieve ready-to-deploy smart contracts for DeFi, DAOs, and other blockchain applications.
- Use natural language prompts to generate contracts without writing Solidity from scratch.
- Integrate with Claude for Desktop or other MCP clients for conversational contract generation.

---

## Example Prompts

You can use natural language prompts to generate or fetch contract templates. Here are some examples:

### Token Contracts

- **ERC20 Token**
  - "Setup a smart contract for my new ERC20 coin called AwesomeCoin, set max cap to 10,000."
  - "Create an ERC20 token contract named MyToken with a symbol MTK and a total supply of 1,000,000."
  - "Generate a capped ERC20 contract for a token called EcoToken, with a maximum supply of 500,000."

- **ERC721 NFT**
  - "Create an ERC721 NFT contract for my digital art collection called ArtGems."
  - "I want an NFT contract named RareCollectibles with the symbol RARE."
  - "Generate an ERC721 contract for a project called CryptoPets."

- **ERC1155 Multi-Token**
  - "Setup an ERC1155 contract for a game that supports multiple item types."
  - "Create a multi-token contract for my collectibles platform called MultiCollect."
  - "Generate an ERC1155 smart contract for a project called GameAssets."

### Other Smart Contract Categories

- **Access Control**
  - "Give me a smart contract that implements role-based access control."
  - "Create a contract with admin and minter roles for my dApp."
  - "Setup an access control contract for managing permissions in my project."

- **Account Management**
  - "Generate a smart contract for account abstraction."
  - "I need a contract that supports multi-signature wallets."
  - "Create an account management contract for a DAO."

- **Finance**
  - "Create a smart contract for a simple escrow service."
  - "Generate a contract for a decentralized lending platform."
  - "Setup a finance contract for managing pooled investments."

- **Governance**
  - "Give me a governance contract for a DAO with proposal and voting features."
  - "Create a smart contract for token-based voting."
  - "Setup a governance contract for my decentralized organization."

---

## How it works

When you ask a question like "Give me an ERC20 contract" in your MCP-enabled client:

1. The client sends your question to Claude (or another LLM)
2. The LLM analyzes the available tools and selects the appropriate one (e.g., `get-token-contract`)
3. The client executes the tool through the MCP server
4. The results (Solidity contract code) are sent back to the client
5. The LLM formulates a natural language response and displays it to you

---

## Integration Example: MCP Client Configuration

To use openzippelin-mcp with Claude for Desktop, Cursor, or any other MCP-compatible client, add the server to your MCP client configuration file. Below are example configurations:

### Claude for Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` and add:

```json
{
  "mcpServers": {
    "openzippelin-mcp": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/PARENT/FOLDER/openzippelin-mcp/build/index.js"]
    }
  }
}
```

### Cursor

Edit your Cursor MCP configuration (e.g., `~/.cursor/mcp_servers.json`) and add:

```json
{
  "openzippelin-mcp": {
    "command": "node",
    "args": ["/ABSOLUTE/PATH/TO/PARENT/FOLDER/openzippelin-mcp/build/index.js"]
  }
}
```

> **Note:** Replace `/ABSOLUTE/PATH/TO/PARENT/FOLDER/openzippelin-mcp/build/index.js` with the actual absolute path to your built server file.

After saving the configuration, restart your client. The "get-token-contract" tool and other capabilities will be available for use via natural language prompts.

---

## openzippelin-mcp is designed to work out-of-the-box with Claude for Desktop, Cursor, and any other MCP-compatible client. Simply add the server to your MCP client configuration and start using natural language to generate smart contracts for your blockchain projects.
