const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// mongodb+srv://venkatesh:${process.env.PWD}@mycluster.fyzgz.mongodb.net/maya-data?retryWrites=true&w=majority
mongoose.connect(`${process.env.DB_URI}`, 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}
);

module.exports.Meeting = require('./meeting');