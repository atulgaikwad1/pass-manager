console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
	username: 'Atul' ,
	balance: 100
},{
	username:'Umakant',
	balance: 10
}]);
var accounts = storage.getItemSync('accounts');

//push on a new accounts
accounts.push({
	username: 'Jitu',
	balance: 75
	});
	
	//save using setItemSync
	storage.setItemSync('accounts', accounts);
	
	
console.log(accounts);