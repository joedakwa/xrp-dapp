import Web3Modal from "web3modal";
import web3 from "web3";
//import {ethers} from "ethers";
import {CoinbaseWalletSDK} from '@coinbase/wallet-sdk';
//import {WalletConnectProvider} from "@walletconnect/web3-provider";

const Main = () => {

    const providerOptions = {
        // Add WalletConnect to the providerOptions
        // walletconnect: {
        //     package: WalletConnectProvider,
        //     options: {
        //     infuraId: {3: "https://mainnet.infura.io/v3/f345fc4e21ea40b7bc644b1627b37ff3"}
        //     }
        // },
        // Add CoinbaseWallet to the providerOptions
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

    async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: true,
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
const clickHandler = () => {
    connectWallet();
    console.log('click');
};

return (<button onClick={() => clickHandler()}>ConnectWallet</button>);
};


export default Main;    