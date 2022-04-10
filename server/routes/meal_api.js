"use strict";
const express = require("express");
const router = express.Router();
const RestoToken = require("../model/RestoToken");
const Meal = require("../model/Meal");

router.get('/all',async (req,res,next)=>{
	try {
		let  data = await Meal.getMeals();
		res.send({ok:true,meals:data});
	} catch (error) {
		res.send({ ok: false, message: error.message });
	}
});

router.post('/', async (req, res, next) => {
	try {
		let token = req.headers.authorization.substring(7);
		let resto = await RestoToken.getRestoByToken(token);
		if(!RestoToken.isConnected(token)) throw new Error("Utilisateur non connecté");
		let meal = new Meal(req.body);
		meal.restoId = resto._id;
		await meal.save();
		res.send({ok:true,message:"Plat enregistré"});
	} catch (error) {
		res.send({ ok: false, message: error.message });
	}
	
});

router.get('/',async (req,res,next)=>{
	try{
		let token = req.headers.authorization.substring(7);
		let resto = await RestoToken.getRestoByToken(token);
		if(!RestoToken.isConnected(token)) throw new Error("Utilisateur non connecté");
		let data = await Meal.getMealsByToken(token);
		res.send({ok:true,meals:data}); 
	}catch(error){
		console.log(error);
		res.send({ ok: false, message: error.message });
	}
});

module.exports = router;