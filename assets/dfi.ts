import { defineChain, parseGwei } from "viem";

export const dfi = defineChain({
    id: 8,
    name: "DFI",
    network: "dfi",
    nativeCurrency: {
        name: "DFi",
        decimals: 18,
        symbol: "DFI",
        totalSupply: 1000000000,
        icon: "https://raw.githubusercontent.com/awwea/daofinance/main/assets/symbol.png",
    },
    rpcUrls: {
        default: {
            http: ["https://chain.daofinance.me/rpc"],
            webSocket: ["wss://chain.daofinance.me/ws"],
        },
        public: {
            http: ["https://chain.daofinance.me/rpc"],
            webSocket: ["wss://chain.daofinance.me/ws"],
        },
    },
    blockExplorers: {
        default: { name: "Explorer", url: "https://explorer.daofinance.me" },
        etherscan: { name: "Explorer", url: "https://explorer.daofinance.me" },
    },
    contracts: {
        multicall3: {
            address: "0xb05E36BfBfb313331ed9740B1D8E929555A92634",
            blockCreated: 2,
        },
    },
});
