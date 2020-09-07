const express = require("express");
const router = express.Router();

//const Forecast = require("../../models/Forecast");
const Boule = require("../../models/Boule");

//@route GET api/mawazo/test
//@desc test mawazo route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "mawazo iko" }));

//@route POST api/cinput/enregistrer
//@desc enregistre les saisies des participants
//@Accès Privé
//router.post('/enregistrer',passport.authenticate('jwt', { session: false }), (req,res)=>{
/* router.post("/sauvegarde", (req, res) => {
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
}); */

//@route POST api/cinput/enregistrer
//@desc enregistre les saisies des participants
//@Accès Privé
//router.post('/enregistrer',passport.authenticate('jwt', { session: false }), (req,res)=>{
router.post("/bombaboule", (req, res) => {
  const newBoule = new Boule({
    user: req.body.user,
  });

  newBoule
    .save()
    .then((uneBoule) => res.json(uneBoule))
    .catch((err) => console.log(err));
});

module.exports = router;
