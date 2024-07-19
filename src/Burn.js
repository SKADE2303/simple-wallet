import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import BurnerPopup from './BurnerPopup'


const TokenBurner = () => {
	
//define functions to view all properties of the token by ID

return (
			<div className={styles.interactionsCard}>
				<form >
					<h3> Burn a specific token </h3>
						
						<p> Token Symbol </p>
						<input type='text' id='sendAmount' min='0' step='1'/>

						<button type='submit' className={styles.button6}>Burn</button>
                        
						<div>
							
						</div>
			</form>
			</div>
		)
}

export default TokenBurner;