import logo from "./logo.svg";
import "./App.css";
import demon from "./demon.png";
import cryptography from "./cryptography.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={demon} />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cryptography} />
      </header>
    </div>
  );
}

export default App;
