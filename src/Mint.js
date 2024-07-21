import React, { useState } from 'react';
import { ethers } from 'ethers';
import styles from './Wallet.module.css';
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';

const MintToken = () => {
	const [tokenAddress, setTokenAddress] = useState('');
	const [amount, setAmount] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const contractAddress = '0x42F2e779886CfaD43899834BaB7BE6631aD3ebaA';

	const handleMintToken = async (event) => {
		event.preventDefault();

		if (!window.ethereum) {
			setErrorMessage('MetaMask is not installed!');
			return;
		}

		try {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(contractAddress, Token_Factory_abi, signer);

			// Convert the amount to the appropriate decimal format
			const formattedAmount = ethers.utils.parseUnits(amount, 18); // Adjust decimals if needed

			// Call the mint function
			const tx = await contract.mint(tokenAddress, formattedAmount);
			await tx.wait();

			alert('Minting successful!');
			setTokenAddress('');
			setAmount('');
		} catch (error) {
			console.error('Error minting token:', error);
			setErrorMessage('Error minting token: ' + error.message);
		}
	};

	return (
		<div className={styles.GenerationCard}>
			<form onSubmit={handleMintToken}>
				<h3>Mint Token</h3>
				<p>Token Address</p>
				<input
					type='text'
					value={tokenAddress}
					onChange={(e) => setTokenAddress(e.target.value)}
					className={styles.addressInput}
				/>
				<p>Amount</p>
				<input
					type='number'
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<button type='submit' className={styles.button6}>Mint</button>
				{errorMessage && <div>{errorMessage}</div>}
			</form>
		</div>
	);
};

export default MintToken;
