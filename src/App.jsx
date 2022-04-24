import './App.css'
import { useState } from 'react'
// import { ethers } from "ethers";

function App() {
  const [isConnected, setIsConnected] = useState(false);

  async function connectToMetaMask() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        console.log("acounts: ", accounts);
        console.log("current account: ", account);

        setIsConnected(true);
      } 
      catch (error) {
        console.log(error);
      }
    }
    else {
      setIsConnected(false);
    }
  };


  return (
    <div className="App">
      <div className="containter">
          <div className="heading">
              <h1>create test connection to a metamask wallet</h1>
          </div>
          <div>
              <p>
                  click button to connect to the metamask
              </p>
              <div className="px-3 mb-3">
                  {
                    isConnected ? 
                      <button className="btn" disabled>connect</button> :
                      <button className="btn" onClick={connectToMetaMask}>connect</button>
                  }
              </div>
              { isConnected ? "you are connected now!" : "not connected yet! please click on top button to connecting ..."}
          </div>
      </div>
    </div>
  )
}

export default App
