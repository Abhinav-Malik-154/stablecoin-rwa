import { useState } from "react";
import { connectWallet } from "./wallet";

function App() {
  const [status, setStatus] = useState("Not connected");
  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState("");
  const [balance, setBalance] = useState("");

  async function handleConnect() {
    try {
      const info = await connectWallet();
      setAddress(info.address);
      setChainId(info.chainId);
      setBalance(info.balance);
      setStatus("Wallet connected");
    } catch (err) {
      console.error(err);
      setStatus("Connection failed");
    }
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Stablecoin + RWA Protocol</h1>

      <button onClick={handleConnect}>Connect Wallet</button>

      <p>Status: {status}</p>
      {address && <p>Address: {address}</p>}
      {chainId && <p>Chain ID: {chainId}</p>}
      {balance && <p>ETH Balance: {balance}</p>}
    </div>
  );
}

export default App;
