const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BeyiSchema = new Schema({
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

module.exports = Beyi = mongoose.model("beyi", BeyiSchema);
