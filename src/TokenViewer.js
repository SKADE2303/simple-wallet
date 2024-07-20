import React, { useState } from 'react';
import styles from './Wallet.module.css';
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';
import { ethers } from 'ethers';

const TokenViewer = () => {
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
				<h3>View Details of a Specific Token</h3>
				<p>Token Symbol</p>
				<input
					type='text'
					id='tokenSymbol'
					className={styles.addressInput}
					value={symbolInput}
					onChange={(e) => setSymbolInput(e.target.value)}
				/>

				<button type='submit' className={styles.button6}>View Details</button>
			</form>

			<div>
				<h4>Token Details</h4>
				<p>Name: {tokenName}</p>
				<p>Symbol: {tokenSymbol}</p>
				<p>Total Supply: {tokenSupply}</p>
				<p>Address: {tokenAddress}</p>
			</div>
		</div>
	);
};

export default TokenViewer;
