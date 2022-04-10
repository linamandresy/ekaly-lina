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

	static getMeals(){
		return new Promise((resolve,reject)=>{
			const action = (error,db)=>{
				if(error) reject(error);
				else{
					let dbo = db.db(configDB.database);
					dbo.collection("meal").find({}).toArray((err,res)=>{
						resolve(res);
						db.close();
					});
				}
			}
			executeDB(action);
		});
	}
	static getMealsByToken(token){
		return new Promise(async (resolve,reject)=>{
			const action = (error, db) => {
				if (error) throw error;
				let dbo = db.db(configDB.database);
				let crt ={
					_token : token,
					_expirationDate:{$gt:new Date(new Date(Date.now()).getTime())}
				};
				let pipeline = [{
						$match:crt
					},{
						$lookup:{
							from:'resto',
							localField:'_idResto',
							foreignField:'_id',
							as:'resto',
							pipeline:[{
									$lookup:{
										from:'meal',
										localField:'_id',
										foreignField:'_restoId',
										as:'meals'
									}
							}]
						}
					}
				];

				dbo.collection("restoToken").aggregate(pipeline).toArray((err,res)=>{
					if(res.length!==1) reject(new Error("Token non valide"));
					else {
						resolve(res[0].resto[0].meals);
					}
					db.close();
				});
			}
			executeDB(action);
		});
	}
}

module.exports=Meal;