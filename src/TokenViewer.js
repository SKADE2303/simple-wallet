import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';


const TokenViewer = () => {
	
//define functions to view all properties of the token by ID
//input parameters of the function are token symbol or token address
// its fine if token address is not there, I'll change the front-end accordingly
// The function should implement all the get functionalities of the TokenFactory.sol
// The buttong on pressing would call the TokenFactory contract and send the data as a json object to our code
// All details would be showed in a popup
// I am defining all the constants here which have to be fetched;

const [tokenName, setTokenName] = useState('');
const [tokenAddress, setTokenAddress] = useState('');
const [tokenSupply, setTokenSupply] = useState('');
const [tokenSymbol, setTokenSymbol] = useState('');
const [symbolInput, setSymbolInput] = useState('');

const contractAddress = '0x42F2e779886CfaD43899834BaB7BE6631aD3ebaA'; // token factory contract

const handleViewDetails = async (event) => {
	event.preventDefault();

	if (!window.ethereum) {
		console.error('MetaMask is not installed!');
		return;
	}

	try {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(contractAddress, Token_Factory_abi, signer);

		// Fetch the token address using symbol input
		const token = await contract.getTokenFromSymbol(symbolInput);

		// Fetch token details
		const name = await contract.getName(token);
		const symbol = await contract.getSymbol(token);
		const supply = await contract.getSupply(token);

		setTokenName(name);
		setTokenSymbol(symbol);
		setTokenSupply(supply.toString());
		setTokenAddress(token);

		alert(`Token Details:\nName: ${name}\nSymbol: ${symbol}\nTotal Supply: ${supply}\nAddress: ${token}`);
	} catch (error) {
		console.error('Error fetching token details:', error);
	}
};


return (
			<div className={styles.interactionsCard}>
				<form onSubmit={handleViewDetails}>
					<h3> View Detials of a Specific Token </h3>
						<p> Token Address </p>
						<input type='text' id='tokenName' className={styles.addressInput}/>

						<p> Token Symbol </p>
						<input type='text' id='sendAmount' min='0' step='1'/>

						<button type='submit' className={styles.button6}>View Details</button>
						<div>
							
						</div>
			</form>
			</div>
		)
}

export default TokenViewer;