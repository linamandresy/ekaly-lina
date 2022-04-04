"use strict";
var MongoClient = require('mongodb').MongoClient,
	DBConfig = require("../config/database.json");

const execute = async (action) => {
	return new Promise((resolve,reject)=>{
		try{
			resolve(MongoClient.connect(DBConfig.uri, DBConfig.config, action));
		}catch(e){
			reject(e);
		}

	}) ;
}

module.exports = execute;