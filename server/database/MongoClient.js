"use strict";
var MongoClient = require('mongodb').MongoClient,
	DBConfig = require("../config/database.json");

const execute = async (action) => {
	MongoClient.connect(DBConfig.uri, DBConfig.config, action);
}

module.exports = execute;