const mongoose = require("mongoose");
const AddLanguageSchema = new mongoose.Schema({
  lang: {
    type: String,
  },
});

module.exports = AddLanguage = mongoose.model("languages", AddLanguageSchema);
