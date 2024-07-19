import { React, useState, useEffect } from 'react'
import { ethers } from 'ethers'
import styles from './Wallet.module.css'


const TokenGenerator = (props) => {

	const [transferHash, setTransferHash] = useState(null);

	const CreateHandler = async (e) => {
		console.log("create handler")
		e.preventDefault();
		let tranferSymbol = e.target.sendAmount.value;
		let transferName = e.target.tokenName.value;
		console.log(transferName, tranferSymbol)
		let txt = "";
		try {
			txt = await props.contract.createTokens(tranferSymbol, transferName);
		}
		catch (e)  {
			console.log("err:", e)
		}


		console.log(txt)
		setTransferHash(txt.hash);
	}
	//Create a function to make an instance of a token using tokenFactory.sol

	return (
		<div className={styles.GenerationCard}>
			<form onSubmit={CreateHandler}>
				<h3> Create Token </h3>
				<p> Token Name </p>
				<input type='text' id='tokenName' className={styles.addressInput} />

				<p> Token Symbol </p>
				<input type='text' id='sendAmount' min='0' step='1' />

				<button type='submit' className={styles.button6}>Create</button>
				<div>
					{transferHash}
				</div>
			</form>
		</div>
	)
}

export default TokenGenerator;