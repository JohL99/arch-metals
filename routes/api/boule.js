const express = require("express");

const router = express.Router();

//load boule model
const Boule = require("../../models/Boule");

//@route GET api/boule/test
//@desc test boule route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "boule ok" }));

//@route GET api/boule/sauvegarde
//@desc sauvegarde boule route
//@access Public
router.post("/sauvegarde", (req, res) => {
  const newBoule = new Boule({
    user: req.body.user,
    commodity: req.body.commodity,
    month: req.body.month,
  });
  newBoule
    .save()
    .then((boule1) => res.json(boule1))
    .catch((erre) => console.log(erre));
});

module.exports = router;
