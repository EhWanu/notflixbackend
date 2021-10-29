const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(8000, () => {
	console.log("Backend is up");
});
