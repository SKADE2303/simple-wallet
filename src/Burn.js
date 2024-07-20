import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import BurnerPopup from './BurnerPopup'


const TokenBurner = () => {
	
//define function to burn the token (ie) remove it from the existing tokens
// The function would take input parameters as the symbol of the token
// The only function written here would be to delete the token
// Once deleted, the function should have a bool value changed which will enable a popup on the screem saying, "token deleted"
// I'll add the front-end for the pop-up

	

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