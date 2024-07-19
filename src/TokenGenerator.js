import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const TokenGenerator = () => {
	
//Create a function to make an instance of a token using tokenFactory.sol
//Input parameters are token symbol and token name
//Call the mint function from TokenFactory.sol
//If token is created successfully, the website will give a popup of token created successfully

return (
			<div className={styles.GenerationCard}>
				<form >
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