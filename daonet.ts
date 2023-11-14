import { defineChain, parseGwei } from "viem";

export const daonet = defineChain({
	id: 1001,
	name: "Daonet",
	network: "daonet",
	nativeCurrency: {
		decimals: 18,
		name: "DAONET",
		symbol: "DFI",
		icon: "/cryptocurrency-icons/svg/color/dai.svg",
	},
	rpcUrls: {
		default: {
			http: ["https://api.daofinance.me"],
			webSocket: ["wss://api.daofinance.me/ws"],
		},
		public: {
			http: ["https://api.daofinance.me"],
			webSocket: ["wss://api.daofinance.me/ws"],
		},
	},
	blockExplorers: {
		default: { name: "Explorer", url: "https://scan.daofinance.me" },
		etherscan: { name: "Explorer", url: "https://scan.daofinance.me" },
	},
	contracts: {
		multicall3: {
			address: "0xb05E36BfBfb313331ed9740B1D8E929555A92634",
			blockCreated: 1,
		},
	},
    fees: {
        baseFeeMultiplier: 1,
        async estimateFeesPerGas({ client, multiply, type }) {
            const gasPrice = 0;
            const baseFeePerGas = 0;
            const maxPriorityFeePerGas = 0;

            if (type === 'legacy') return { gasPrice: multiply(gasPrice) };
            return {
                maxFeePerGas: multiply(baseFeePerGas) + maxPriorityFeePerGas,
                maxPriorityFeePerGas
            };
        }
    },
});
