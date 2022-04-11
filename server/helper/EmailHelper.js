"use strict";

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'mandresyrab@gmail.com',
		pass: 'czugqkqlwetkyohm'
	}
});

const sendMail = (dest, subject, text) => {
	console.log("================Mail====================");
	var mailOptions = {
		from: 'mandresyrab@gmail.com',
		to: dest,
		subject: subject,
		html: text
	};



	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};

module.exports=sendMail;