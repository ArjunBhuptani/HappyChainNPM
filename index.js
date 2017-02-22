var xhrHandler = require('./xhr');

function initializeApp(apiKey, apiSecret){
	return {
		//if it's stupid, but it works, it aint stupid
		//params for xhrHandler are: (url, key, secret, contractname, contractaddress, ofuser, fromuser, touser, value, note)
	 	getContract(): xhrHandler("https://api.happycha.in/get_contract", apiKey, apiSecret, null, null, null, null, null, null, null), //still needs contract address? Check api endpoint

	 	listContracts(): xhrHandler("https://api.happycha.in/list_contracts", apiKey, apiSecret, null. null, null, null, null, null, null),

	 	createContract(contract_name): xhrHandler("https://api.happycha.in/create_contract", apiKey, apiSecret, contract_name, null, null, null, null, null, null),

		contractAt: function(contractAddress){
			return {
		 		balanceOf(ofUser): xhrHandler("https://api.happycha.in/balance_of", apiKey, apiSecret, null, contractAddress, ofUser, null, null, null, null),

			 	getTotalSupply(): xhrHandler("https://api.happycha.in/get_total_supply", apiKey, apiSecret, null, contractAddress, null, null, null, null, null),

			 	deposit(toUser, value): xhrHandler("https://api.happycha.in/deposit", apiKey, apiSecret, null, contractAddress, null, null, toUser, value, null),

			 	withdraw(fromUser, value): xhrHandler("https://api.happycha.in/withdraw", apiKey, apiSecret, null, contractAddress, null, fromUser, null, value, null),

			 	transfer(fromUser, toUser, value): xhrHandler("https://api.happycha.in/transfer", apiKey, apiSecret, null, contractAddress, null, fromUser, toUser, value, null),

			 	setBalance(ofUser, value): xhrHandler("https://api.happycha.in/set_balance", apiKey, apiSecret, null, contractAddress, ofUser, null, null, value, null),

			 	updateNote(note): xhrHandler("https://api.happycha.in/update_note", apiKey, apiSecret, null, contractAddress, null, null, null, null, note),

			 	getNote(): xhrHandler("https://api.happycha.in/get_note", apiKey, apiSecret, null, contractAddress, null, null, null, null, null)
			}
		}

 	}
}

module.exports = initializeApp;


