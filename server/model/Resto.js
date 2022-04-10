"use strict";
const executeDB = require("../database/MongoClient"),
	sha1 = require('sha1'),
	Tokenizer = require("../helper/TokenHelper"),
	configDB = require("../config/database.json");
const RestoToken = require("./RestoToken");
const emailValidator = require("email-validator");
class Resto {

	constructor({ id, name, email, phone, profilePicture, description, categoryId = "62527197aa0aad153873d2f7", localisation, illustrations, password }) {
		this._id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.profilePicture = profilePicture;
		this.description = description;
		this.categoryId = categoryId;
		this.localisation = localisation;
		this.illustrations = illustrations;
	}

	set phone(value) {
		this._phone = value;
	}
	get phone() {
		return this._phone;
	}
	set profilePicture(value) {
		this._profilePicture = value;
	}
	get profilePicture() {
		return this._profilePicture;
	}
	set description(value) {
		this._description = value;
	}
	get description() {
		return this._description;
	}
	set categoryId(value) {
		this._categoryId = value;
	}
	get categoryId() {
		return this._categoryId;
	}
	set localisation(value) {
		this._localisation = value;
	}
	get localisation() {
		return this._localisation;
	}
	set illustrations(value) {
		this._illustrations = value;
	}
	get illustrations() {
		return this._illustrations;
	}

	set name(value) {
		this._name = value;
	}
	get name() {
		return this._name;
	}
	set email(value) {
		if (!emailValidator.validate(value)) throw new Error("Email non valide");
		this._email = value;
	}
	get email() {
		return this._email;
	}
	set password(value) {
		this._password = sha1(value!==undefined?value: '');
	}
	get password() {
		return this._password;
	}

	update() {
		return new Promise((resolve, reject) => {
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);
				let data = {
					_name : this.name,
					_email : this.email,
					_phone : this.phone,
					_profilePicture : this.profilePicture,
					_description : this.description,
					_categoryId : this.categoryId,
					_localisation : this.localisation,
					_illustrations : this.illustrations
				}
				const filter = {_email:this.email};
				dbo.collection("resto").findOneAndUpdate(filter, {$set:data},(err, res) => {
					resolve(res);
					db.close();
				});
			}
			executeDB(action);
		});
	}

	signup() {
		return new Promise((resolve, reject) => {
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);

				dbo.collection("resto").insertOne(this, (err, res) => {
					if (res === undefined) reject(new Error("Vous ne pouvez pas utiliser cette adresse email"));
					else resolve(`${res.insertedId}`);
					db.close();
				});
			}
			executeDB(action);
		});
	}
	login() {
		return new Promise((resolve, reject) => {
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);

				const cdt = { _email: this.email, _password: this.password };
				console.log(cdt)
				dbo.collection("resto").findOne(cdt, (err, res) => {
					if (res === null) reject(new Error("Adresse email ou mot de passe invalide"));
					else {
						let token = Tokenizer.tokenize(`${res._id}`);
						let restoToken = new RestoToken(token, res._id);
						restoToken.save();
						resolve(token);
					}
					db.close();
				});
			}
			executeDB(action);
		});
	}
	static getCategories() {
		return new Promise((resolve, reject) => {
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);

				dbo.collection("restoCategories").find({}).toArray((err, res) => {
					if (res === null) reject(new Error("Aucune donnée disponible"));
					else
						resolve(res);
					db.close();
				});
			}
			executeDB(action);
		});
	}
	static getResto(){
		return new Promise((resolve,reject)=>{
			const action = (error,db)=>{
				if(error) reject(error);
				else{
					let dbo = db.db(configDB.database);
					dbo.collection("resto").find({}).toArray((err,res)=>{
						resolve(res);
						db.close();
					});
				}
			}
			executeDB(action);
		});
	}
}

module.exports = Resto;