"use strict";
const express = require("express");
const router = express.Router();
const Resto = require('../model/Resto');

router.post("/login",(req,res,next)=>{
	res.send({
		status:200,
		message:"Vous etres bien connecté",
		token:"qlhqjshdlkqjhdlqkjshdlqkjhdqlkjdhqlkjhdqlkjhlq"
	});
});

router.post("/signup",(req,res,next)=>{
	try{

		let resto = new Resto(req.body);
		resto.signup();
		console.log(resto);
		res.send({
			status:200,
			message:"Félicitation pour votre inscription",
			token:"zeazjheglaglsdjfsldjfhsldkjfhlsjfhdskfhdlsfhslsl"
		});
	}catch(error){
		console.log(error);
	}
});
module.exports = router;