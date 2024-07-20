import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';


const TokenGenerator = () => {
	
//Create a function to make an instance of a token using tokenFactory.sol
//Input parameters are token symbol and token name
//Call the mint function from TokenFactory.sol
//If token is created successfully, the website will give a popup of token created successfully

const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const contractAddress = '0x42F2e779886CfaD43899834BaB7BE6631aD3ebaA'; // token factory contract

	const handleCreateToken = async (event) => {
		event.preventDefault();

		if (!window.ethereum) {
			setErrorMessage('MetaMask is not installed!');
			return;
		}

		try {
			await window.ethereum.enable()
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(contractAddress, Token_Factory_abi, signer);

			const tx = await contract.createTokens(tokenName, tokenSymbol);
			await tx.wait(); // Wait for the transaction to be mined

			alert('Token created successfully!');
			setTokenName('');
			setTokenSymbol('');
		} catch (error) {
			console.error('Error creating token:', error);
			console.log(ethers);
			setErrorMessage('Error creating token: ' + error.message);
		}
	};

return (
			<div className={styles.GenerationCard}>
				<form onSubmit={handleCreateToken} >
					<h3> Create Token </h3>
						<p> Token Name </p>
						<input type='text' id='tokenName' className={styles.addressInput}/>

						<p> Token Symbol </p>
						<input type='text' id='sendAmount' min='0' step='1'/>

						<button type='submit' className={styles.button6}>Create</button>
						<div>
							
						</div>
			</form>
			</div>
		)
}

export default TokenGenerator;