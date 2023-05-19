import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import Web3Modal from "web3modal";
import web3 from "web3";
//import {ethers} from "ethers";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';


const providerOptions = {
  CoinbaseWallet: {
    package: CoinbaseWalletSDK,
    options: {
    appName: 'My dApp',
    infuraId: {3: "https://mainnet.infura.io/v3/f345fc4e21ea40b7bc644b1627b37ff3"}
    }

  },
           // Add MetaMask option
           metamask: {
            package: web3,
            options: {
              appName: 'My dApp'
            }
          }
        };



function App() {

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new web3.providers.Web3Provider(web3ModalInstance);
      //const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      console.log(web3ModalProvider);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my app!</h1>
        <Main/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a onClick={connectWallet} className="App-link"
        >
          Welcome to XRP Wallet
        </a>
      </header>
    </div>
  );
}

export default App;

          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
