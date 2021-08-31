const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
let isConnected;

const DB_URL =
  "mongodb+srv://nbowman15:New_R0ses@cluster0-w66d2.mongodb.net/test?retryWrites=true&w=majority";

const connectToDatabase = () => {
  if (isConnected) {
    console.log("Using existing database connection.");
    return Promise.resolve();
  }

  console.log('Using new database connection."');
  return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(db => {
    isConnected = db.connections[0].readyState;
  });
};

module.exports = connectToDatabase;
