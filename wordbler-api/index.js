const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3001;
const errorHandler = require("./handlers/error"); 

app.use(cors());
app.use(bodyParser.json());

// all my routes here

app.use(function(req, res, next) {
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.listen(PORT, function() {
	console.log(`Server is starting on port ${PORT}`);
});