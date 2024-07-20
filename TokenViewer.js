import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const TokenViewer = () => {
	
	const [defaultAccount, setDefaultAccount] = useState(null);
//define functions to view all properties of the token by ID
const transferSymbol = async (e) => {
	e.preventDefault();
	let symbol = e.target.sendSymbol.value;
	setDefaultAccount(await props.contract.getTokenFromSymbol(symbol));
}

return (
			<div className={styles.interactionsCard}>
				<form onSubmit={transferSymbol}>
					<h3> View Detials of a Specific Token </h3>
						<div>
						<h3> Token Address: {defaultAccount}</h3>
						</div>
						<p> Token Symbol </p>
						<input type='text' id='sendSymbol' min='0' step='1'/>

						<button type='submit' className={styles.button6}>View Details</button>
						<div>
							
						</div>
			</form>
			</div>
		)
}

export default TokenViewer;