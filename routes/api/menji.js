const express = require("express");

const router = express.Router();
/* 
//pour fichier
const multer = require("multer"); */

//load boule model
const Menji = require("../../models/Menji");

//@route GET api/Menji/test
//@desc test Menji route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Menji ok" }));

//@route GET api/Menji/sauvegarde
//@desc sauvegarde Menji route
//@access Public
router.post("/sauvegarde", (req, res) => {
  const newMenji = new Menji({
    user: req.body.user,
    commodity: req.body.commodity,
    mois: req.body.mois,
    dateforecast: req.body.dateforecast,
    price1: req.body.price1,
    price2: req.body.price2,
    price3: req.body.price3,
    price4: req.body.price4,
    price5: req.body.price5,
    price6: req.body.price6,
    price7: req.body.price7,
    price8: req.body.price8,
    price9: req.body.price9,
    lamoyenne: req.body.lamoyenne,
    lemedian: req.body.lemedian,
    specificcomments: req.body.specificcomments,
    generalcomments: req.body.generalcomments,
    documentshared: req.body.documentshared,
  });

  newMenji
    .save()
    .then((menjis) => res.json(menjis))
    .catch((erre) => console.log(erre));
});

// @route   GET api/cinput/dernierda
// @desc    Renvoie toutes les dernières entrées des utilisateurs / Returns all the latest user entries
// @access  Public
router.get("/dernierda/:lemois&:commodity", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { mois: req.params.lemois },
          { commodity: req.params.commodity },
        ],
      },
    },

    {
      $sort: { dateforecast: 1, commodity: 1, mois: 1, user: 1 },
    },

    {
      $group: {
        _id: {
          user: "$user",
          mois: "$mois",
        },
        lastEntry: { $last: "$_dateforecast" },
        detail: { $last: "$$ROOT" },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/cinput/dernierda1
// @desc    Renvoie toutes les dernières entrées des utilisateurs par mois / Returns all the latest user entries by mois
// @access  Public
router.get("/dernierda1/:lemois&:commodity", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { mois: req.params.lemois },
          { commodity: req.params.commodity },
        ],
      },
    },
    { $sort: { _id: -1 } },
    {
      $group: {
        _id: "$user",

        lastEntry: { $max: "$dateforecast" },
        autre: {
          user: "$user",
          mois: "$mois",
          price1: "$price1",
          price2: "$price2",
          price3: "$price3",
          price4: "$price4",
          price5: "$price5",
          price6: "$price6",
          price7: "$price7",
          price8: "$price8",
          price9: "$price9",
          lemedian: "$lemedian",
          lamoyenne: "$lamoyenne",
          specificcomments: "$specificcomments",
          generalcomments: "$generalcomments",
        },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/cinput/dernierda
// @desc    Renvoie tous les trucks devant arriver
// @access  Public
router.get("/olda/:lemois&:commodity", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { mois: req.params.lemois },
          { commodity: req.params.commodity },
        ],
      },
    },

    { $sort: { dateforecast: -1, commodity: 1, mois: 1, user: 1 } },

    {
      $group: {
        _id: {
          user: "$user",
          mois: "$mois",
        },
        lastEntry: { $last: "$_id" },
        nombre: { $sum: 1 },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET  api/prices/:id
// @desc    Get price by id
// @access  Public
router.get("/olda1/:lemois&:commodity&:nombre", (req, res) => {
  const errors = {};
  var x = parseInt(req.params.nombre);

  Menji.find({
    $and: [{ mois: req.params.lemois }, { commodity: req.params.commodity }],
  })
    .sort({ dateforecast: -1, commodity: 1, mois: 1, user: 1 })

    .limit(x)
    .then((menjis) => {
      res.json(menjis);
      //console.log(menjis);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET  api/all/:mois&:commodity
// @desc    Get all data
// @access  Public
router.get("/all/:lemois&:commodity", (req, res) => {
  const errors = {};
  Menji.find({
    $and: [{ mois: req.params.lemois }, { commodity: req.params.commodity }],
  })
    .sort({ dateforecast: 1, commodity: 1, mois: 1, user: 1 })
    .then((menjis) => {
      res.json(menjis);
      //console.log(menjis);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/menji/moymois
// @desc    Renvoie toutes les means par date / Return all means by mois
// @access  Public
router.get("/moymois/:commodity", (req, res) => {
  const errors = {};
  Menji.aggregate([
    {
      $match: {
        commodity: req.params.commodity,
      },
    },
    
    {
      $group: {
        _id: "$mois",
        avg1: { $avg: { $multiply: ["$price1", 100] } },
        avg2: { $avg: { $multiply: ["$price2", 100] } },
        avg3: { $avg: { $multiply: ["$price3", 100] } },
        avg4: { $avg: { $multiply: ["$price4", 100] } },
        avg5: { $avg: { $multiply: ["$price5", 100] } },
        avg6: { $avg: { $multiply: ["$price6", 100] } },
        avg7: { $avg: { $multiply: ["$price7", 100] } },
        avg8: { $avg: { $multiply: ["$price8", 100] } },
        avg9: { $avg: { $multiply: ["$price9", 100] } },
        median: { $avg: "$lemedian" },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .sort({ dateforecast: 1, commodity: 1, mois: 1 })
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/menji/moymois
// @desc    Renvoie renvoie number d'entrées par mois / Returns returns number of entries per mois
// @access  Public
router.get("/comptemois/:commodity", (req, res) => {
  const errors = {};
  Menji.aggregate([
    {
      $match: {
        commodity: req.params.commodity,
      },
    },
    {
      $unwind: "$price1",
    },
    {
      $group: {
        _id: "$mois",
        compte: { $sum: 1 },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .sort({ dateforecast: -1, commodity: 1, mois: 1 })
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/menji/moyunmois
// @desc    Renvoie toutes les means par date / Return all means by date
// @access  Public
router.get("/moyunmois/:lemois&:commodity", (req, res) => {
  const errors = {};
  Menji.aggregate([
    {
      $match: {
        $and: [
          { mois: req.params.lemois },
          { commodity: req.params.commodity },
        ],
      },
    },

    { $sort: { dateforecast: -1, commodity: 1, mois: 1, user: 1 } },

    {
      $group: {
        _id: "$mois",
        avg1: { $avg: { $multiply: ["$price1", 100] } },
        avg2: { $avg: { $multiply: ["$price2", 100] } },
        avg3: { $avg: { $multiply: ["$price3", 100] } },
        avg4: { $avg: { $multiply: ["$price4", 100] } },
        avg5: { $avg: { $multiply: ["$price5", 100] } },
        avg6: { $avg: { $multiply: ["$price6", 100] } },
        avg7: { $avg: { $multiply: ["$price7", 100] } },
        avg8: { $avg: { $multiply: ["$price8", 100] } },
        avg9: { $avg: { $multiply: ["$price9", 100] } },
        median: { $avg: "$lemedian" },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .sort({ _id: -1 })
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/menji/moytousmois
// @desc    Renvoie toutes les means par mois / Return all means per mois
// @access  Public
router.get("/moytousmois/:commodity", (req, res) => {
  const errors = {};
  Menji.aggregate([
    {
      $match: {
        commodity: req.params.commodity,
      },
    },

    {
      $group: {
        _id: "$mois",
        avg1: { $avg: { $multiply: ["$price1", 100] } },
        avg2: { $avg: { $multiply: ["$price2", 100] } },
        avg3: { $avg: { $multiply: ["$price3", 100] } },
        avg4: { $avg: { $multiply: ["$price4", 100] } },
        avg5: { $avg: { $multiply: ["$price5", 100] } },
        avg6: { $avg: { $multiply: ["$price6", 100] } },
        avg7: { $avg: { $multiply: ["$price7", 100] } },
        avg8: { $avg: { $multiply: ["$price8", 100] } },
        avg9: { $avg: { $multiply: ["$price9", 100] } },
        median: { $avg: "$lemedian" },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET  api/user/:mois&:commodity&:user
// @desc    Get data per user
// @access  Public
router.get("/userd/:lemois&:commodity&:user", (req, res) => {
  const errors = {};
  Menji.find({
    $and: [
      { mois: req.params.lemois },
      { commodity: req.params.commodity },
      { user: req.params.user },
    ],
         
  })

    .sort({ dateforecast: 1, commodity: 1, mois: 1, user: 1 })
    .then((menjis) => {
      res.json(menjis);
      //console.log(menjis);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/cinput/dernierda
// @desc    Renvoie toutes les dernières entrées des utilisateurs
// @access  Public
router.get("/dernierdauser/:lemois&:commodity&:user", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { mois: req.params.lemois },
          { commodity: req.params.commodity },
          { user: req.params.user },
        ],
      },
    },

    {
      $sort: { _id: -1 },
    },

    {
      $group: {
        _id: {
          user: "$user",
          mois: "$mois",
        },
        lastEntry: { $last: "$_dateforecast" },
        detail: { $last: "$$ROOT" },
      },
    },
  ])

    /* .populate({ path: "user" }) */
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

// @route   GET api/cinput/recentdauser
// @desc    Renvoie toutes les dernières entrées des utilisateurs
// @access  Public
router.get("/recentdauser/:commodity&:user", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [{ commodity: req.params.commodity }, { user: req.params.user }],
      },
    },

    {
      $sort: { dateforecast: 1, commodity: 1, mois: 1, user: 1 },
    },

    {
      $group: {
        _id: {
          user: "$user",
          mois: "$mois",
        },
        lastEntry: { $last: "$_dateforecast" },
        detail: { $last: "$$ROOT" },
      },
    },
  ])
    
    /* .populate({ path: "user" }) */
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "no forecast" }));
});

module.exports = router;
