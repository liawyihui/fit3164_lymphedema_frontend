import React from 'react';
import { Button } from 'primereact/button';
import logo from './mylogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MDS02 Lymphedema Predictive Model</h1>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Button label="Home" className="p-button-outlined p-button-lg p-button-secondary" style={{ marginRight: "20px" }} />
          <Button label="Assessment" className="p-button-outlined p-button-lg p-button-secondary" style={{ marginRight: "50px" }} />
        </div>
      </header>
      <div className="ThreeLineText-container">
        <div className="ThreeLineText1">
              <p><strong>Your Health,</strong></p>
              <p><strong>Our Prediction,</strong></p>
              <p><strong>Your Future.</strong></p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="ThreeLineText2">
        <p>Lymphedema can be managed more effectively when</p>
        <p>detected early. We empower you with the tools to stay</p>
        <p>one step ahead.</p>
      </div>
    </div>
  );
}
export default App;