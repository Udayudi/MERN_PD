const mongoose = require("mongoose");
const PersonalDetailsSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  homecity: {
    type: String,
    required: true,
  },
  officeid: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  currency: {
    type: String,
  },
  about: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = PersonalDetails = mongoose.model(
  "personal",
  PersonalDetailsSchema
);
