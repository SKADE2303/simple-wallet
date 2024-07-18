import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const TokenViewer = () => {
	
//define functions to view all properties of the token by ID

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