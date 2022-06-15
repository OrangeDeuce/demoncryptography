import logo from "./logo.svg";
import "./App.css";
import demon from "./demon.png";
import cryptography from "./cryptography.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={demon} alt="demon logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cryptography} alt="cryptography logo" />
      </header>
    </div>
  );
}

export default App;
