const express = require("express");
const router = express.Router();
const Floorprice = require("../../models/Floorprice");

//@route GET api/floorprices/test
//@desc test price route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "prices are ok" }));
