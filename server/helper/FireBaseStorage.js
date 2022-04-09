"use strict";

const { initializeApp } = require('firebase/app');

const { ref, uploadBytes, getStorage, getDownloadURL } = require('firebase/storage');
const config = require("../config/application.json");

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
	apiKey: config.firebaseApiKey,
	authDomain: config.firebaseAuthDomain,
	databaseURL: config.firebaseDatabaseUrl,
	storageBucket: config.firebaseStorageBucket
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp, config.firebaseBucketStorageUrl);


const uploadToFireBase = (file, name, contentType) => {
	return new Promise((resolve, reject) => {

		let fileName = `${new Date(Date.now()).toLocaleString()}${name}`;
		let imageRef = ref(storage, fileName);
		let metadata = {
			contentType: contentType
		};
		uploadBytes(imageRef, file, metadata).then(
			(snapshot) => {
				getDownloadURL(imageRef).then(
					(downloadURL) => {
						resolve(downloadURL);
					}
				);
			}
		);

	});
};

module.exports = uploadToFireBase;