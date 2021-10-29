const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() =>
		console.log("connection successful!")
	)
	.catch((err) => console.log(err));

app.listen(8000, () => {
	console.log("Backend is up");
});
