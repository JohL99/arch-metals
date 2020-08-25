const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

//les fichiers
const users = require("./routes/api/users");
const beyi = require("./routes/api/beyi");
//const posts = require("./routes/api/posts");
const boule = require("./routes/api/boule");
const mawazo = require("./routes/api/mawazo");
const menji = require("./routes/api/menji");
const file = require("./routes/api/file");

const app = express();
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;
//connect to MongoDB
mongoose
  .set("useUnifiedTopology", true)
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//app.get("/", () => res.send("hello"));

//Passport middleware
app.use(passport.initialize());
//Passport config
require("./config/passport")(passport);

//use routes
app.use("/api/users", users);
//app.use("/api/posts", posts);
app.use("/api/beyi", beyi);
app.use("/api/boule", boule);
app.use("/api/mawazo", mawazo);
app.use("/api/menji", menji);
app.use("/api/file", file);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  /* // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
 */
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

//le port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
