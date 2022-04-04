"use strict";
const express = require("express");
const router = express.Router();
const Resto = require('../model/Resto');

router.post("/login",async (req,res,next)=>{
	
	try {
		console.log(req.body);
		let resto = new Resto(req.body);
		let token =await resto.login();
		console.log(token);
		res.send({ok:true,token:token});
	} catch (error) {
		res.send({ok:false,error:error.message});
	}
});

router.post("/signup",async (req,res,next)=>{
	try{

		let resto = new Resto(req.body);
		await resto.signup();
		let token = await resto.login();
		res.send({ok:true,token:token});
	}catch(error){
		res.send({ok:false,error:error.message});
	}
});
module.exports = router;