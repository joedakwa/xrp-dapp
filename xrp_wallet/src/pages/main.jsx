const Main = () => {
const clickHandler = () => {
    console.log('click');
};

return (<button onClick={() => clickHandler()}>ConnectWallet</button>);
};


export default Main;    