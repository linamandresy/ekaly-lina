"use strict";

const configDB = require("../config/database.json");
const executeDB = require("../database/MongoClient");

class Meal{
	constructor({name,price,description,mainImage,secondaryImage,restoId}){
		this.name = name;
		this.price = price;
		this.description = description;
		this.mainImage = mainImage;
		this.secondaryImage = secondaryImage;
		this.restoId = restoId;
	}
	set name(value){
		this._name=value;
	}
	get name(){
		return this._name;
	}
	set price(value){
		this._price=value;
	}
	get price(){
		return this._price;
	}
	set description(value){
		this._description=value;
	}
	get description(){
		return this._description;
	}
	set mainImage(value){
		this._mainImage=value;
	}
	get mainImage(){
		return this._mainImage;
	}
	set secondaryImage(value){
		this._secondaryImage=value;
	}
	get secondaryImage(){
		return this._secondaryImage;
	}
	set restoId(value){
		this._restoId=value;
	}
	get restoId(){
		return this._restoId;
	}
	save() {
		const action = (error, db) => {
			if (error) throw error;
			let dbo = db.db(configDB.database);
			dbo.collection("meal").insertOne(this, (err, res) => { 
				db.close();
			});
		}
		executeDB(action);
	}
}

module.exports=Meal;