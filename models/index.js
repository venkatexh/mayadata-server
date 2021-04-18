const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://venkatesh:${process.env.PWD}@mycluster.fyzgz.mongodb.net/maya-data?retryWrites=true&w=majority`, 
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}
);

module.exports.Meeting = require('./meeting');