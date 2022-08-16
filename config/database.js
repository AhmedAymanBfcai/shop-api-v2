const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL).then((conn) => {
    console.log(`Database Connected successfully :) `);
  });
};

module.exports = dbConnection;
