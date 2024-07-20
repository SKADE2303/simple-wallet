import {React, useState, useEffect} from 'react'
import {ethers} from 'ethers'
import styles from './Wallet.module.css'
import Token_Factory_abi from './Contracts/Token_Factory_abi.json';


const Mint_Token = () => {
	

return (
			<div className={styles.GenerationCard}>
				<form  >
					<h3> Mint Token </h3>
						<p> Token Address </p>
						<input type='text' id='tokenName' className={styles.addressInput}/>

						<p> Number of tokens </p>
						<input type='text' id='sendAmount' min='0' step='1'/>

						<button type='submit' className={styles.button6}>Mint</button>
						<div>
							
						</div>
			</form>
			</div>
		)
}

export default Mint_Token;