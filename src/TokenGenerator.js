import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'


const TokenGenerator = () => {
	
return (
			<div className={styles.interactionsCard}>
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