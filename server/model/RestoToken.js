"use strict";

const config = require("../config/application.json");
const configDB = require("../config/database.json");

class RestoToken {
	constructor(token, idResto, expirationDate = new Date(new Date(Date.now()).getTime() + (config["session-validity"] * 60000))) {
		this.token = token;
		this.idResto = idResto;
		this.expirationDate = expirationDate;
	}
	set token(value) {
		this._token = value;
	}
	get token() {
		return this._token;
	}
	set idResto(value) {
		this._idResto = value;
	}
	get idResto() {
		return this._idResto;
	}
	set expirationDate(value) {
		this._expirationDate = value;
	}
	get expirationDate() {
		return this._expirationDate;
	}
	save() {
		const action = (error, db) => {
			if (error) throw error;
			let dbo = db.db(configDB.database);
			dbo.collection("restoToken").insertOne(this, (err, res) => { });
			//db.close();
		}
	}
}

module.exports = RestoToken;