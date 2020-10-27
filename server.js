const express = require("express");
const app = express();

const connectDB = require("./config/db");

// DB Connection
connectDB();

// Init Meddleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is Working");
});

//Routes
app.use("/api/personalDetails", require("./routes/api/personalDetails"));
app.use("/api/addlanguage", require("./routes/api/addLanguage"));

const port = process.env.PORT || 8001;
app.listen(port, () => `Server running on port ${port}`);
