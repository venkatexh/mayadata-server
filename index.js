const express = require('express');
const cors = require('cors');
const meetingRoutes = require('./routes/meeting');
const errorHandler = require('./handlers/error');

const app = express();

var corsOptions = {
	origin: ['http://localhost:3000', 'https://goalkeep.netlify.app'],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.status(200).send({message: "Hello!"});
})

app.use('/api/meeting', meetingRoutes);

app.use(function(req, res, next) {
	let error = new Error("Not found!");
	error.status = 400;
	next(error);
})

app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log("Listening on 7000...");
});