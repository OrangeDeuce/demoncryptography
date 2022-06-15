import logo from "./logo.svg";
import "./App.css";
import demon from "./demon.png";
import cryptography from "./cryptography.png";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ConnectButton, darkTheme } from "@rainbow-me/rainbowkit";
import {
  //
  Flex,
  //Text,
  Image,
  useMediaQuery,
  //Stack,
  //Container,
} from "@chakra-ui/react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [infuraProvider({ infuraId: process.env.INFURA_ID })]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
        })}
      >
        <ChakraProvider>
          <Flex background="yellow" color="black" p="5">
            <ConnectButton
              label="Connect"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "address",
              }}
            />
          </Flex>
          <div className="App">
            <Flex className="App-header">
              <Image
                src={demon}
                alt="demon logo"
                width={isNotSmallerScreen ? "25%" : "32%"}
                height="auto"
              />
              <Image src={logo} className="App-logo" alt="logo" />
              <Image
                src={cryptography}
                alt="cryptography logo"
                width={isNotSmallerScreen ? "85%" : "75%"}
                height="auto"
              />
            </Flex>
          </div>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
