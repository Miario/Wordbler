require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
// all my routes here

app.use(function(req, res, next) {
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.listen(PORT, function() {
	console.log(`Server is starting on port ${PORT}`);
});