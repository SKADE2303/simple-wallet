import {React, useState, useEffect } from 'react';
import {ethers} from "ethers";
import styles from './Wallet.module.css';
import simple_token_abi from './Contracts/simple_token_abi.json';
import Interactions from './Interactions';
import TokenGenerator from './TokenGenerator';
import TokenViewer from './TokenViewer';

const Wallet = () =>{

    const contractAdress = '0x8eE39Be1Ca8Ed375f5d18dfec4477f73793d22C9';
    const MyTokenAdress = '0xF6F4D75ed12d8EEC300e395fbc62d4Ebc974CC09';

    const [tokenName, setTokenName] = useState("Token");
    const [connButtonText, setConnButtonText] = useState("Connect");
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [balance, setBalance] = useState(null);

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);


    const connectWalletHandler = ()=> {
        if(window.ethereum){

            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChangedHandler(result[0]);
                setConnButtonText('Account Connected');
            })
            .catch(error =>{
                setErrorMessage(error.message);
            })

        } else {
            console.log("Failed to Connect to Wallet");
            setErrorMessage("Failed to Connect to Wallet");
        }
    };

    const accountChangedHandler = (newAdress) =>{
        setDefaultAccount(newAdress);
        updateEthers();
    };

    const updateEthers = () =>{
        let tempProvider = new ethers.BrowserProvider(window.ethereum);

        let tempSigner =  tempProvider.getSigner();

        let tempContract = new ethers.Contract(contractAdress, simple_token_abi, tempSigner);

        setProvider(tempProvider);
        setSigner(tempSigner);
        setContract(tempContract);
    }

    useEffect(()=>{
        if(contract != null){
            updateBalance1();
            updateTokenName1();
        }
    },[contract])

    const updateBalance1 = async () =>{
        let balanceBigN = await contract.balanceOf(defaultAccount);
        let amountBigN = balanceBigN.toNumber();

        let decimals = await contract.Decimals();

        let tokenBalance = amountBigN/ Math.pow(10,decimals);

        setBalance(tokenBalance);

    }

    const updateTokenName1 = async () =>{
        setTokenName(await contract.name());
    }

    return (
        <div>
            <h2> {tokenName + "ERC-20 Wallet"} </h2>
            <button className = {styles.button6} onClick={connectWalletHandler}>{connButtonText}</button>
            {errorMessage}

            <div className= {styles.walletCard}>
                <div>
                 <h3> Address: {defaultAccount}</h3>
                </div>

                 <div>
                    <h3>{tokenName} Balance: {balance}</h3>
                 </div>
                {errorMessage}
            </div>

            <Interactions contract= {contract}/>
            <br></br>
            <TokenGenerator />
            <br></br>
            <TokenViewer />
        </div>
    );


}

export default Wallet;