const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("mongodbConnection");
const db = config.get("mongodbConnection");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("Mongodb Database COnnected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
