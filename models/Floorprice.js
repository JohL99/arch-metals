const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema  commodity, month, floorprice, ratio
const FloorpriceSchema = new Schema({
  commodity: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  floorprice: {
    type: Number,
    required: true,
  },

  constant1: {
    type: Number,
    required: true,
  },
});

module.exports = Floorprice = mongoose.model("floorprices", FloorpriceSchema);
