import logo from "./logo.svg";
import "./App.css";
import demon from "./demon.png";
import cryptography from "./cryptography.png";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  //
  Flex,
  //Text,
  Image,
  useMediaQuery,
  //Stack,
  //Container,
} from "@chakra-ui/react";

function App() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <ChakraProvider>
      <Flex background="yellow" color="black"></Flex>
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
            width={isNotSmallerScreen ? "75%" : "75%"}
            height="auto"
          />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
