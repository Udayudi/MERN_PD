const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const PersonalDetails = require("../models/PersonalDetails");

router.get("/", async (req, res) => {
  try {
    const personalDetails = await PersonalDetails.find().populate(
      "personalDetails",
      [
        "firstname",
        "lastname",
        "email",
        "phoneno",
        "gender",
        "dob",
        "homecity",
        "officeid",
        "language",
        "currency",
        "about",
      ]
    );
    res.json(personalDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.post(
  "/adddetails",
  [check("firstname", "FirstName is Reqired").not().isEmpty()],
  [check("lastname", "LastName is Reqired").not().isEmpty()],
  [check("gender", "Gender is Reqired").not().isEmpty()],
  [check("dob", "Date of Birth is Reqired").not().isEmpty()],
  [check("email", "Email is Reqired").isEmail()],
  [check("phoneno", "Phone Number is Reqired").not().isEmpty()],
  [check("homecity", "Home City is Reqired").not().isEmpty()],
  [check("officeid", "Officeal ID is Reqired").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      firstname,
      lastname,
      email,
      phoneno,
      gender,
      dob,
      homecity,
      officeid,
      language,
      currency,
      about,
    } = req.body;

    try {
      // See if details exists
      let persoanlDetails = await PersonalDetails.findOne({ email });
      if (persoanlDetails) {
        res.status(400).json({ errors: [{ massge: "Email alrady exists" }] });
      }

      personalDetails = new PersonalDetails({
        firstname,
        lastname,
        gender,
        dob,
        email,
        phoneno,
        homecity,
        officeid,
        language,
        currency,
        about,
      });

      await personalDetails.save();

      console.log(req.body);
      res.send("Details Added");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
