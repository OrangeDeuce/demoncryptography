import logo from "./logo.svg";
import "./App.css";
import demon from "./demon.png";
import cryptography from "./cryptography.png";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <nav background="yellow">
        <h1>This is the nav bar</h1>
      </nav>
      <div className="App">
        <header className="App-header">
          <img src={demon} alt="demon logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={cryptography} alt="cryptography logo" />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
