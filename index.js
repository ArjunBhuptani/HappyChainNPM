var http = require('http');

function initializeApp(apiKey, apiSecret){
	return {
	 	getContract: function(){
	 		//Http GET api.happycha.in.com/get_contracts
	 	},

	 	listContracts: function(){
	 		//Http GET api.happycha.in.com/list_contracts
	 	},

	 	createContract: function(contract_name) {
	 		var contractOutput = //http POST api.happycha.in/create_contract/ <inputs api_key, api secret, contract_name>

	 		console.log("Contract created. Gas used: " + contractOutput.gas_used ", contract address: " + contractOutput.contract_address);

	 		contractAt(contractOutput.contract_address);
		},

		contractAt: function(contractAddress){
			return {
		 		balanceOf: function(ofUser){},

			 	getTotalSupply: function(){},

			 	deposit: function(toUser, value){},

			 	withdraw: function(fromUser, value){},

			 	transfer: function(fromUser, toUser, value){},

			 	setBalance: function(ofUser, value){},

			 	updateNote: function(note){},

			 	getNote: function(){}
			}
		}

 	}
}


module.exports = initializeApp;


