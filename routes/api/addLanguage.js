const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const AddLanguage = require("../models/Languages");

router.get("/getlanguage", async (req, res) => {
  try {
    const addLanguage = await AddLanguage.find().populate("addLanguage", [
      "lang",
    ]);
    res.json(addLanguage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.post("/addlanguage", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { lang } = req.body;

  try {
    let addLanguages = await AddLanguage.findOne({ lang });
    if (addLanguages) {
      res.status(400).json({ errors: [{ message: "Language alrady Exist" }] });
    }
    addLanguages = new AddLanguage({
      lang,
    });

    await addLanguages.save();
    console.log(req.body);
    res.send("Details Added");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
