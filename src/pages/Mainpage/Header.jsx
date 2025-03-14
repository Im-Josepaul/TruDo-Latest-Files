import React, { useState } from "react";
import { ethers } from "ethers";
import "./css/fontawesome.css";
import "./css/index.css";
import "./css/owl.css";
import "./css/animate.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [account, setAccount] = useState(null);

  //Metamask login and details
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({method: "eth_requestAccounts",});
    setAccount(accounts[0]);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    console.log("Connected account is: \n"+accounts);
    console.log("Value of accounts[0] is: \n"+accounts[0]);
    // console.log(provider);
    // console.log(signer);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <nav className="main-nav">
          {/* Logo */}
          <a href="#" className="logo">
            <h1>Trudo</h1>
          </a>

          {/* Menu */}
          <ul className="nav">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <Link to="/createCampaign" state={{address: account}}>
                Create Campaign
              </Link>
            </li>
            <li>
              <button onClick={web3Handler} className="connect-button">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
                  className="metamask-icon"
                  alt="MetaMask Icon"
                />
                {account ? "Connected" : "Connect Wallet"}
              </button>
            </li>
          </ul>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
