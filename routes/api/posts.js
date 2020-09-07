const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@desc test post route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "posts are ok" }));

// @route   GET  api/prices/:id
// @desc    Get price by id
// @access  Public
router.get("/tout", (req, res) => {
  const errors = {};
  Floorprice.find()
    .populate()
    .then((floorprices) => {
      /*  if (!floorprices) {
        errors.nolocalisation = "il n y a pas de localisation";
        return res.status(404).json(errors);
      } */
      //res.json({ msg: "prices are ok" });
      res.json(floorprices);
      console.log(floorprices);
    })
    .catch((err) =>
      res.status(404).json({ localisation: "pas de localisation" })
    );
});

module.exports = router;
