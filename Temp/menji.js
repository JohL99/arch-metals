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
    month: req.body.month,
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
// @desc    Renvoie toutes les dernières entrées des utilisateurs
// @access  Public
router.get("/dernierda/:month&:commodity", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { month: req.params.month },
          { commodity: req.params.commodity },
        ],
      },
    },

    {
      $sort: { dateforecast: 1, user: 1 },
    },

    {
      $group: {
        _id: {
          user: "$user",
          mois: "$month",
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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET api/cinput/dernierda
// @desc    Renvoie toutes les dernières entrées des utilisateurs par mois
// @access  Public
router.get("/dernierda1/:month&:commodity", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { month: req.params.month },
          { commodity: req.params.commodity },
        ],
      },
    },
    { $sort: { dateforecast: -1 } },
    {
      $group: {
        _id: "$user",

        lastEntry: { $max: "$dateforecast" },
        autre: {
          user: "$user",
          month: "$mois",
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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET api/cinput/dernierda
// @desc    Renvoie tous les trucks devant arriver
// @access  Public
router.get("/olda/:month&:commodity", (req, res) => {
  const errors = {};

  Menji.aggregate([
    {
      $match: {
        $and: [
          { month: req.params.month },
          { commodity: req.params.commodity },
        ],
      },
    },

    { $sort: { user: 1, dateforecast: 1 } },

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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET  api/prices/:id
// @desc    Get price by id
// @access  Public
router.get("/olda1/:month&:commodity&:nombre", (req, res) => {
  const errors = {};
  var x = parseInt(req.params.nombre);

  Menji.find({
    $and: [{ month: req.params.month }, { commodity: req.params.commodity }],
  })
    .sort({ $natural: -1 })

    .limit(x)
    .then((menjis) => {
      res.json(menjis);
      //console.log(menjis);
    })
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET  api/all/:month&:commodity
// @desc    Get all data
// @access  Public
router.get("/all/:month&:commodity", (req, res) => {
  const errors = {};
  Menji.find({
    $and: [{ month: req.params.month }, { commodity: req.params.commodity }],
  })
    .sort({ _id: 1 })
    .then((menjis) => {
      res.json(menjis);
      //console.log(menjis);
    })
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET api/menji/moymois
// @desc    Renvoie toutes les moyennes par date
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
    .then((forecasts) => {
      if (!forecasts) {
        errors.noforecast = "no forecast";
        return res.status(404).json(errors);
      }

      res.json(forecasts);
    })
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET api/menji/moymois
// @desc    Renvoie renvoie nombre d'entrées par mois
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
        _id: "$month",
        compte: { $sum: 1 },
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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET api/menji/moyunmois
// @desc    Renvoie toutes les moyennes par date
// @access  Public
router.get("/moyunmois/:month&:commodity", (req, res) => {
  const errors = {};
  Menji.aggregate([
    {
      $match: {
        $and: [
          { month: req.params.month },
          { commodity: req.params.commodity },
        ],
      },
    },

    {
      $group: {
        _id: "$month",
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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET api/menji/moytousmois
// @desc    Renvoie toutes les moyennes par mois
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
        _id: "$month",
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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

// @route   GET  api/user/:month&:commodity&:user
// @desc    Get data per user
// @access  Public
router.get("/userd/:month&:commodity&:user", (req, res) => {
  const errors = {};
  Menji.find({
    $and: [
      { month: req.params.month },
      /*  { commodity: req.params.commodity },
      { user: req.params.user }, */
    ],
  })
    .sort({ dateforecast: 1 })
    .then((menjis) => {
      res.json(menjis);
      //console.log(menjis);
    })
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
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
      $sort: { dateforecast: 1 },
    },

    {
      $group: {
        _id: {
          user: "$user",
          mois: "$month",
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
    .catch((err) => res.status(404).json({ forecast: "pas de forecast " }));
});

module.exports = router;
