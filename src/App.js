import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lymphedema</h1>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <h3 style={{ marginRight: "20px" }}>Home</h3>
          <h3 style={{ marginRight: "10px" }}>Assessment</h3>
        </div>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
