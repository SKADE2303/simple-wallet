import React, { useState } from 'react';
import { ethers } from 'ethers';
import styles from './Wallet.module.css';
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';

const TokenBurner = () => {
    const [tokenAddress, setTokenAddress] = useState('');
    const [burnAmount, setBurnAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

            const tx = await contract.burn(tokenAddress, ethers.utils.parseUnits(burnAmount, 2));
            await tx.wait(); // Wait for the transaction to be mined

            alert('Burning successful');
            setTokenAddress('');
            setBurnAmount('');
        } catch (error) {
            console.error('Error burning token:', error);
            setErrorMessage('Error burning token: ' + error.message);
        }
    };

    return (
        <div className={styles.interactionsCard}>
            <form onSubmit={handleBurnToken}>
                <h3>Burn a specific token</h3>
                <p>Token Address</p>
                <input
                    type="text"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    className={styles.addressInput}
                />
                <p>Number of Tokens to Burn</p>
                <input
                    type="text"
                    value={burnAmount}
                    onChange={(e) => setBurnAmount(e.target.value)}
                    className={styles.addressInput}
                />
                <br /><br />
                <button type="submit" className={styles.button6}>Burn</button>
                {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
            </form>
        </div>
    );
};

export default TokenBurner;
