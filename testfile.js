var initializeApp = require('./index.js');

var apiKey = "bc84fe0a9e0430ecf9a10a11dd0342ad";
var apiSecret = "33756503a5e6e6cb27b66a079cb1c24a";

var happychainApp = initializeApp(apiKey, apiSecret);

var response = happychainApp.listContracts;