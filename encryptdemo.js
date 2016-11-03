var crypto = require('crypto-js');

var secretMessage = {
	name: 'Atul',
	secretName: '007'
};
var secretKey = 'test@abc1';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage) secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

//Decrypt Message

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decrytedMessage = JSON.parse(bytes.toString(crypto.enc.UTH8));

console.log(decryptedMessage);
