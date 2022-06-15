import logo from "./logo.svg";
import "./App.css";
import demon from "./demon.png";
import cryptography from "./cryptography.png";
import linkedin from "./linkedIn.png";
import github from "./github.png";
import React from "react";
import { Box, ChakraProvider, Spacer } from "@chakra-ui/react";
import { ConnectButton, darkTheme } from "@rainbow-me/rainbowkit";
import {
  //
  Flex,
  //Text,
  Image,
  Link,
  useMediaQuery,
  //Input,
  //Stack,
  //Container,
} from "@chakra-ui/react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";

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
          <Flex background="yellow" color="black" p="5" justifyContent="right">
            <ConnectButton
              label="Connect"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "address",
              }}
            />
          </Flex>

          <Flex className="App-header">
            <Image
              src={demon}
              alt="demon logo"
              width={isNotSmallerScreen ? "25%" : "40%"}
              height="auto"
            />
            <Image src={logo} className="App-logo" alt="logo" />
            <Image
              src={cryptography}
              alt="cryptography logo"
              width={isNotSmallerScreen ? "65%" : "89%"}
              height="auto"
            />
          </Flex>
          <Flex background="yellow" justifyContent="center" pb="7">
            <Box>
              <a
                href="https://www.linkedin.com/in/orangedeuce/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedin}
                  pr="2"
                  width={isNotSmallerScreen ? "25%" : "35%"}
                  alt=""
                  height="auto"
                  float="right"
                />
              </a>
            </Box>
            <Box>
              <a
                href="https://github.com/OrangeDeuce"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={github}
                  pl="2"
                  width={isNotSmallerScreen ? "25%" : "35%"}
                  alt=""
                  height="auto"
                />
              </a>
            </Box>
          </Flex>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
