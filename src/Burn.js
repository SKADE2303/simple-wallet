import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import BurnerPopup from './BurnerPopup'
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';


const TokenBurner = () => {
	
//define function to burn the token (ie) remove it from the existing tokens
// The function would take input parameters as the symbol of the token
// The only function written here would be to delete the token
// Once deleted, the function should have a bool value changed which will enable a popup on the screem saying, "token deleted"
// I'll add the front-end for the pop-up

const [tokenAddress, setTokenAddress] = useState('');
    const [burnAmount, setBurnAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);

    const contractAddress = '0x42F2e779886CfaD43899834BaB7BE6631aD3ebaA'; // Token factory contract address

    const handleBurnToken = async (event) => {
        event.preventDefault();

        if (!window.ethereum) {
            setErrorMessage('MetaMask is not installed!');
            return;
        }

        try {
            await window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, Token_Factory_abi, signer);

            const tx = await contract.burn(tokenAddress, ethers.utils.parseUnits(burnAmount, 18));
            await tx.wait(); // Wait for the transaction to be mined

            setPopupOpen(true); // Open the popup
            setTokenAddress('');
            setBurnAmount('');
        } catch (error) {
            console.error('Error burning token:', error);
            setErrorMessage('Error burning token: ' + error.message);
        }
    };

	

return (
			<div className={styles.interactionsCard}>
				<form onClick = {handleBurnToken}>
					<h3> Burn a specific token </h3>
						
						<p> Token Symbol </p>
						<input type='text' id='sendAmounts' min='0' step='1'/>

                        <p> Number of Tokens to Burn </p>
						<input type='text' id='sendAmount' min='0' step='1'/>
                        <br></br>
                        <br></br>
						<button type='submit' className={styles.button6}>Burn</button>
                        
						<div>
							
						</div>
			</form>
			</div>
		)
}

export default TokenBurner;