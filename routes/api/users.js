const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load User model
const User = require("../../models/User");

//@route GET api/users/test
//@desc test user route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "users are ok" }));

//@route GET api/users/register
//@desc register user
//@access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: 200, //size
        r: "pg", // rating
        d: "mm", //default
      });
      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        avatar: avatar,
        email: req.body.email,
        altemail: req.body.altemail,
        realname: req.body.realname,
        commodity: req.body.commodity,
        sex: req.body.sex,
        age: req.body.age,
        geolocation: req.body.geolocation,
        professionBackground: req.body.professionBackground,
        workplace: req.body.workplace,
        forecastingapproach: req.body.forecastingapproach,
        bio: req.body.bio,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          console.log(newUser);
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//@route GET api/users/login
//@desc login user
//@access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //find user by email
  User.findOne({ email }).then((user) => {
    //check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }
    //check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // res.json({ msg: "success" });

        //User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; //create jwt payload
        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

//@route GET api/users/current
//@desc return current user
//@access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

//@route GET api/users/tous
//@desc return all users
//@access Private
router.get("/tous/", (req, res) => {
  const errors = {};

  Users.find()
  .sort({commodity: 1, name: 1})
  .then((utilisateurs) => {
      if (!utilisateurs) {
        errors.nocustomer = "no user";
        return res.status(404).json(errors);
      }

      res.json(utilisateurs);
    })
    .catch((err) => res.status(404).json({ utilisateur: "no user" }));
});

module.exports = router;


//@route GET api/users/cuusers
//@desc return all users
//@access Private
router.get("/cuusers/:commodity", (req, res) => {
  const errors = {};

  Users.find([ { commodity: req.params.commodity, },],)
    
  .sort({commodity: 1}, {name: 1}, )  
  
  .then((utilisateurs) => {
      if (!utilisateurs) {
        errors.nocustomer = "no user";
        return res.status(404).json(errors);
      }

      res.json(utilisateurs);
    })
    .catch((err) => res.status(404).json({ utilisateur: "no user" }));
});

module.exports = router;

//@route GET api/users/auuusers
//@desc return all users
//@access Private
router.get("/auusers/:Gold&:CopperGold", (req, res) => {
  const errors = {};

  User.find([ { $match: { $or: [ { commodity: req.params.commodity }, { commodity: req.params.commodity },],},},],)

    .then((utilisateurs) => {
      if (!utilisateurs) {
        errors.nocustomer = "no user";
        return res.status(404).json(errors);
      }

      res.json(utilisateurs);
    })
    .catch((err) => res.status(404).json({ utilisateur: "no user" }));
});


module.exports = router;
