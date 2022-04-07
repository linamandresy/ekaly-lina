"use strict";

const sha1 = require("sha1");

class TokenHelper{
	static tokenize(value){
		let tokenValue = `${value}@Ekaly.com_${Date.now()}`;
		tokenValue = sha1(tokenValue);
		return tokenValue;
	}
}

module.exports=TokenHelper;