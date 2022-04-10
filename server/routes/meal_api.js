"use strict";
const express = require("express");
const router = express.Router();
const RestoToken = require("../model/RestoToken");
const Meal = require("../model/Meal");

router.post('/', async (req, res, next) => {
	try {
		console.log(req.body);
		let resto = await RestoToken.getRestoByToken(req.headers.authorization.substring(7));
		let meal = new Meal(req.body);
		meal.restoId = `${resto._id}`;
		await meal.save();
		res.send({ok:true,message:"Plat enregistré"});
	} catch (error) {
		console.log(error);
		res.send({ ok: false, message: error.message });
	}

});

module.exports = router;