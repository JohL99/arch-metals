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
        commodity1: req.body.commodity1,
        commodity2: req.body.commodity2,
        sex: req.body.sex,
        age: req.body.age,
        geolocation: req.body.geolocation,
        background: req.body.background,
        workplace: req.body.workplace,
        approach: req.body.approach,
        bio: req.body.bio,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
        q6: req.body.q6,
        q7: req.body.q7,
        q8: req.body.q8,
        q9: req.body.q9,
        q10: req.body.q10,
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
router.get("/tous/:commodity1&:commodity2", (req, res) => {
  const errors = {};

  User.find({ $or: [{commodity1: req.params.commodity1}, {commodity2: req.params.commodity2},] })
  .sort({ name: 1, })
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
