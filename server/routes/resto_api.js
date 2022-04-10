"use strict";
const express = require("express");
const router = express.Router();
const Resto = require('../model/Resto');
const RestoToken = require("../model/RestoToken");

router.put('/:id', async (req, res, next) => {
	try {
		let token = req.headers.authorization.substring(7);
		await RestoToken.isConnected(token)
		let resto = new Resto(req.body);
		await resto.update();
		res.send({ok:true,message:"Profil mis à jour"});
	} catch (error) {
		console.log(error);
		res.send({ ok: false, error: error.message });
	}
});

router.post("/login", async (req, res, next) => {

	try {
		let resto = new Resto(req.body);
		let token = await resto.login();
		console.log(token);
		res.send({ ok: true, token: token });
	} catch (error) {
		res.send({ ok: false, error: error.message });
	}
});

router.post("/signup", async (req, res, next) => {
	try {
		let resto = new Resto(req.body);
		await resto.signup();
		let token = await resto.login();
		res.send({ ok: true, token: token });
	} catch (error) {
		res.send({ ok: false, error: error.message });
	}
});

router.get("/categories", async (req, res, next) => {
	try {
		let categories = await Resto.getCategories();
		res.send({ ok: true, categories: categories });
	} catch (error) {
		res.send({ ok: false, error: error.message });
	}
});

router.get('/connected', async (req, res, next) => {
	try {
		let token = req.headers.authorization.substring(7);
		let connected = await RestoToken.isConnected(token);
		res.send({ ok: true, connected: connected });
	} catch (error) {
		res.send({ ok: false, error: error.message });
	}
});

router.get('/info', async (req, res, next) => {
	try {
		let token = req.headers.authorization.substring(7);
		let data = await RestoToken.getRestoByToken(token);
		res.send({ ok: true, resto: data });
	} catch (error) {
		res.send({ ok: false, error: error.message });
	}
});
module.exports = router;