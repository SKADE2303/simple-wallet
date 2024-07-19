import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const TokenViewer = () => {
	
//define functions to view all properties of the token by ID
//input parameters of the function are token symbol or token address
// its fine if token address is not there, I'll change the front-end accordingly
// The function should implement all the get functionalities of the TokenFactory.sol
// The buttong on pressing would call the TokenFactory contract and send the data as a json object to our code
// All details would be showed in a popup
// I am defining all the constants here which have to be fetched;

	var token_name;
	var token_address;
	var token_supply;
	var token_symbol;


return (
			<div className={styles.interactionsCard}>
				<form >
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