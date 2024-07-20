import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const TokenViewer = (props) => {
	
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [defaultName, setDefaultName] = useState(null);
//define functions to view all properties of the token by ID
const transferSymbol = async (e) => {
	e.preventDefault();
	let symbol = e.target.sendSymbol.value;
	let address=await props.contract.getTokenFromSymbol(symbol);
	setDefaultAccount(address);
	setDefaultName(await props.contract.getName(address));
}

return (
			<div className={styles.interactionsCard}>
				<form onSubmit={transferSymbol}>
					<h3> View Detials of a Specific Token </h3>
						<div>
						<h3> Token Address: {defaultAccount}</h3>
						</div>
						<div>
						<h3> Token Name: {defaultName}</h3>
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