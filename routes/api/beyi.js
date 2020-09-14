const express = require("express");
const router = express.Router();

const Beyi = require("../../models/Beyi");

const Forecast = require("../../models/Forecast");

//@route GET api/beyi/test
//@desc test price route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "beyi iko" }));

//@route POST api/beyi/enregistrer
//@desc enregistre les beyi
//@Accès Privé
//router.post('/enregistrer',passport.authenticate('jwt', { session: false }), (req,res)=>{
router.post("/enregistrer", (req, res) => {
  const newBeyi = new Beyi({
    month: req.body.month,
    commodity: req.body.commodity,
    floorprice: req.body.floorprice,
    constant1: req.body.constant1,
  });

  newBeyi
    .save()
    .then((mabeyi) => res.json(mabeyi))
    .catch((err) => res.status(404).json({ beyi: "no prices" }));
  /* .catch((err) => console.log(err)); */
});

// @route   GET  api/prices/:id
// @desc    Get price by id
// @access  Public
router.get("/tout", (req, res) => {
  const errors = {};
  Beyi.find()
    .populate()
    .then((mabeyi) => {
      res.json(mabeyi);
      console.log(mabeyi);
    })
    .catch((err) => res.status(404).json({ beyi: "no prices" }));
});

// @route   GET  api/beyi/:id
// @desc    Get beyi by id
// @access  Public
router.get("/id/:id", (req, res) => {
  Beyi.findById(req.params.id)
    .then((mabeyi) => res.json(mabeyi))
    .catch((err) =>
      res.status(404).json({ nobeyifound: "no price for this id" })
    );
});

// @route   GET api/beyi/:month
// @desc    Renvoie le month donné en paramètre
// @access  Public
router.get("/month/:month", (req, res) => {
  Beyi.find({ month: req.params.month })
    .then((mabeyi) => {
      if (!mabeyi) {
        errors.nobeyi = "no price";
        return res.status(404).json(errors);
      }

      res.json(mabeyi);
    })
    .catch((err) => res.status(404).json({ mabeyi: "no price" }));
});

// @route   GET api/beyi/commonth/:month&:commodity
// @desc    Renvoie le month et le commodity donnés en paramètre / Returns the month and commodity given in parameter
// @access  Public
router.get("/commonth/:month&:commodity", (req, res) => {
  Beyi.find({
    $and: [{ month: req.params.month }, { commodity: req.params.commodity }],
  })
    .then((mabeyi) => {
      if (!mabeyi) {
        errors.nobeyi = "no price";
        return res.status(404).json(errors);
      }

      res.json(mabeyi);
    })
    .catch((err) => res.status(404).json({ mabeyi: "no price" }));
});

// @route   GET api/beyi/comm/:commodity
// @desc    Renvoie tous les price item tous les month
// @access  Public
router.get("/comm/:commodity", (req, res) => {
  Beyi.find({
    commodity: req.params.commodity,
  })
    .then((mabeyi) => {
      if (!mabeyi) {
        errors.nobeyi = "no price";
        return res.status(404).json(errors);
      }

      res.json(mabeyi);
    })
    .catch((err) => res.status(404).json({ mabeyi: "no price" }));
});

//
router.post("/sauvegarde", (req, res) => {
  const newForecast = new Forecast({
    user: req.body.user,
    commodity: req.body.commodity,
    month: req.body.month,
    dateForecast: req.body.dateForecast,
    price1: req.body.price1,
    price2: req.body.price2,
    price3: req.body.price3,
    price4: req.body.price4,
    price5: req.body.price5,
    price6: req.body.price6,
    price7: req.body.price7,
    price8: req.body.price8,
    price9: req.body.price9,
    specificComments: req.body.specificComments,
    generalcomments: req.body.generalcomments,
  });

  newForecast
    .save()
    .then((aforecast) => res.json(aforecast))
    .catch((err) => console.log(err));
});

module.exports = router;

// @route   GET api/beyi/:month
// @desc    Renvoie le mois donné en paramètre
// @access  Public
router.get("/month/:month", (req, res) => {
  Beyi.find({ month: req.params.month })
    .then((mabeyi) => {
      if (!mabeyi) {
        errors.nobeyi = "no price";
        return res.status(404).json(errors);
      }

      res.json(mabeyi);
    })
    .catch((err) => res.status(404).json({ mabeyi: "no price" }));
});

// @route   GET api/beyi/commois/:month&:commodity
// @desc    Renvoie le mois et le commodity donnés en paramètre
// @access  Public
router.get("/commonth/:month&:commodity", (req, res) => {
  Beyi.find({
    $and: [{ month: req.params.month }, { commodity: req.params.commodity }],
  })
    .then((mabeyi) => {
      if (!mabeyi) {
        errors.nobeyi = "no price";
        return res.status(404).json(errors);
      }

      res.json(mabeyi);
    })
    .catch((err) => res.status(404).json({ mabeyi: "no price" }));
});

// @route   GET api/beyi/comm/:commodity
// @desc    Renvoie tous les prix pour tous les mois
// @access  Public
router.get("/comm/:commodity", (req, res) => {
  Beyi.find({
    commodity: req.params.commodity,
  })
    .then((mabeyi) => {
      if (!mabeyi) {
        errors.nobeyi = "no price";
        return res.status(404).json(errors);
      }
      res.json(mabeyi);
    })
    .catch((err) => res.status(404).json({ mabeyi: "no price" }));
});