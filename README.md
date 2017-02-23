# HappyChainNPM

Connecting to the [HappyCha.in API] (https://api.happycha.in) has never been easier!

## Getting Started

First, let's install `happychain`.

``` $ npm install --save happychain ```

Then, in our `index.js`,

```var happychain = require('happychain');```

To initialize your app with your `apiKey` and `apiSecret`,

```myHappyChainApp = happychain.initializeApp(apiKey, apiSecret)```

Now, you can call HappyChain methods. For example:

    var contracts = myHappyChainApp.listContracts();
    //returns a list of your happychain contracts
    
## App Methods

### .initializeApp(apiKey, apiSecret)

Initializes your happychain app. It is strongly recommended that developers use initializeApp() instead of manually including key and secret information in their api calls.

Example:

    var myHappyChainApp = happychain.initializeApp(apiKey, apiSecret);
    
### .listContracts()

Returns a list of your contracts

Example:

    var contractList = myHappyChainApp.listContracts();
    console.log("Here are my contracts: " + contractList);
    
### .createContract(contractName)

Creates a new contract on the blockchain and returns the contract_address, json_api and gas_used to write to the blockchain.

**Warning: This is a write function that will cost ether!**

Example: 

    var response = myHappyChainApp.createContract(contractName);
    console.log("Contract created at: " + response.contract_address + ". Gas used: " + response.gas_used);

### .contractAt(contractAddress)

Returns an instance of a contract at a given address. Used typically to facilitate calling contract methods.

Example: 

    var myContract = myHappyChainApp.contractAt(contractAddress);
    myContract.balanceOf(ofUser);
    myContract.getTotalSupply();
    //etc
    
## Contract Methods

## .balanceOf(ofUser)

Takes in User's HappyChain id and returns their contract wallet balance. 

Example:

    var balance = myContract.balanceOf(ofUser);
    console.log("Balance: " + balance);

## .getTotalSupply()

Retreives total currency supply of a given contract.

Example:

    var supply = myContract.getTotalSupply();
    console.log("The total number of contract tokens in circulation: " + supply);

##  .deposit(toUser, value)

Deposits ```value``` of contract tokens into ```toUser```'s wallet. If the id ```toUser``` doesn't exist, the method instead creates a new wallet, assigns the wallet to ```toUser``` and deposits ```value```.
```deposit()``` **increases** the total supply of your contract, not to be confused with ```transfer()```.

Returns the transaction hash of the blockchain write.

**Warning: This is a write function that will cost ether!**

Example:
    
    var transactionHash = myContract.deposit(toUser, value);
    console.log("Deposited " + value + "to " + toUser + ". Transaction hash: " + transactionHash);

## .withdraw(fromUser, value)

Withdraws ```value``` of contract tokens from ```fromUser```'s wallet.
```withdraw()``` **decreases** the total supply of your contract, not to be confused with ```transfer()```.

Returns the transaction hash of the blockchain write.

**Warning: This is a write function that will cost ether!**

Example:
    
    var transactionHash = myContract.withdraw(fromUser, value);
    console.log("Withdrew " + value + "from " + fromUser + ". Transaction hash: " + transactionHash);
    
## .transfer(fromUser, toUser, value)

Transfers ```value``` of tokens from ```fromUser``` to ```toUser```. If no ```toUser``` exists, a new wallet is generated and assigned to ```toUser``` before the transfer occurs. The transfer occurs between users and so the total supply of your contract remains constant, not to be confused with ```deposit()``` and ```withdraw```

Returns the transaction hash.

**Warning: This is a write function that will cost ether!**

Example:
 
    var transactionHash = myContract.transfer(fromUser, toUser, value);
    console.log("Transfered " + value + "from " + fromUser + " to " + toUser + ". Transaction hash: " + transactionHash);

## .setBalance(ofUser, value)

Sets the balance of ```ofUser``` to ```value```. If no user exists with the id ```ofUser```, a new wallet is generated and assigned to ```toUser``` before the balance is set. ```setBalance()``` will affect your total supply, similar to ```deposit()``` and ```withdraw()```

Returns the transaction hash.

**Warning: This is a write function that will cost ether!**

Example:

   var transactionHash = myContract.setBalance(ofUser, value);
   console.log("Set balance of " + ofUser " to " + value + ". Transaction hash: " + transactionHash);

##getNote()

Returns the note of the current contract.

Example: 

    var note = myContract.getNote();
    console.log("Note: " + note);

##updateNote(note)

Updates the note of the current contract. Returns a transaction hash.

**Warning: This is a write function that will cost ether!**

Example:

    var transactionHash = myContract.updateNote(note);
    console.log("Updated note. Transaction hash: " + note);
