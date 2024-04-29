// mongodb + srv://lizrabacala:<password>@cluster0.3t58fy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require('mongoose');
const dbconfig = "mongodb+srv://lizrabacala:Liz140180@cluster0.3t58fy7.mongodb.net/Events?retryWrites=true&w=majority&appName=Cluster0";
const connection = mongoose.connect(dbconfig);

module.exports = connection;

