const express = require("express");
const router = express.Router();
const Forecast = require("../../models//enregistrer");

//@route GET api/cinput/test
//@desc test price route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "prices are ok" }));

//@route POST api/cinput/enregistrer
//@desc enregistre les saisies des participants
//@Accès Privé
//router.post('/enregistrer',passport.authenticate('jwt', { session: false }), (req,res)=>{
router.post("/enregistrer", (req, res) => {
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

// @route   GET api/cinput/dernierda
// @desc    Renvoie tous les trucks devant arriver
// @access  Public
router.get("/dernierda/:month", (req, res) => {
  const errors = {};

  Forecast.aggregate([
    { $match: { month: req.params.month } },
    { $sort: { dateForecast: 1 } },
    {
      $group: {
        _id: "$month",
        lastEntry: { $last: "$dateForecast" },
      },
    },
  ])
    .populate({ path: "user" })
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "il n y a pas de truck";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

module.exports = router;
