"use strict";

const config = require("../config/application.json");
const configDB = require("../config/database.json");
const executeDB = require("../database/MongoClient");

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
			dbo.collection("restoToken").insertOne(this, (err, res) => { 
				db.close();
			});
		}
		executeDB(action);
	}
	static getRestoToken(token){
		return new Promise(async (resolve,reject)=>{
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);
				let crt ={
					_token : token,
					_expirationDate:{$gt:new Date(new Date(Date.now()).getTime())}
				}
				dbo.collection("restoToken").find(crt).toArray((err, res) => { 
					resolve(res[0]);
					db.close();
				});
			}
			executeDB(action);
		});
	}
	static getRestoByToken(token){
		return new Promise(async (resolve,reject)=>{
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);
				let crt ={
					_token : token,
					_expirationDate:{$gt:new Date(new Date(Date.now()).getTime())}
				}
				let pipeline = [{
						$match:crt
					},{
						$lookup:{
							from:'resto',
							localField:'_idResto',
							foreignField:'_id',
							as:'resto'
						}
					}
				];

				dbo.collection("restoToken").aggregate(pipeline).toArray((err,res)=>{
					if(res.length!==1) reject(new Error("Token non valide"));
					else resolve(res[0].resto[0]);
					db.close();
				});
			}
			executeDB(action);
		});
	}
	static async isConnected(token){
		try {
			let data = await this.getRestoToken(token);
			return data!==undefined;
		} catch (error) {
			return false;
		}
	}
}

module.exports = RestoToken;