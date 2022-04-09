"use strict";
const executeDB = require("../database/MongoClient"),
	sha1=require('sha1'),
	Tokenizer = require("../helper/TokenHelper"),
	configDB = require("../config/database.json");
const RestoToken = require("./RestoToken");
const emailValidator = require("email-validator");
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
		if(!emailValidator.validate(value)) throw new Error("Email non valide");
		this._email=value;
	}
	get email(){
		return this._email;
	}
	set password(value){
		this._password= sha1(value);
	}
	get password(){
		return this._password;
	}
	signup(){
		return new Promise((resolve,reject)=>{
			const action = (error,db)=>{
				if(error) throw error;
				let dbo = db.db(configDB.database);

				dbo.collection("users").insertOne(this,(err,res)=>{
					if(res === undefined) reject(new Error("Vous ne pouvez pas utiliser cette adresse email"));
					else resolve(`${res.insertedId}`);
				});
				//db.close();
			}
			executeDB(action);
		}
		);
	}
	login(){
		return new Promise((resolve,reject)=>{
			const action = (error,db)=>{
				if(error) throw error;
				let dbo = db.db(configDB.database);

				const cdt = {_email:this.email,_password:this.password};
				console.log(cdt)
				dbo.collection("users").findOne(cdt,(err,res)=>{
					if(res===null) reject(new Error("Adresse email ou mot de passe invalide"));
					else{
						let token = Tokenizer.tokenize(`${res._id}`);
						let restoToken = new RestoToken(token,res._id);
						restoToken.save();
						resolve(token);
					}
				});
				//db.close();
			}
			executeDB(action);
		});
	}
}

module.exports=Resto;