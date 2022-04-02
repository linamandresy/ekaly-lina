"use strict";
const executeDB = require("../database/MongoClient"),
	configDB = require("../config/database.json");

class Resto{
	constructor({name,email,password}){
		this.name = name;
		this.email=email;
		this.password=password;
	}
	set name(value){
		this._name = value;
	}
	get name(){
		return this._name;
	}
	set email(value){
		this._email=value;
	}
	get email(){
		return this._email;
	}
	set password(value){
		this._password=value;
	}
	get password(){
		return this._password;
	}
	signup(){
		const action = (error,db)=>{
			if(error) throw error;
			let dbo = db.db(configDB.database);
			dbo.collection("users").insertOne(this,(err,res)=>{
				console.log(res);
			})
		}
		executeDB(action);
	}
}

module.exports=Resto;