const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const MenjiSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  commodity: {
    type: String,
    required: true,
  },
  mois: {
    type: String,
    required: true,
  },
  dateforecast: {
    type: Date,
    required: false,
  },
  price1: {
    type: Number,
    default: 0,
  },
  price2: {
    type: Number,
    default: 0,
  },
  price3: {
    type: Number,
    default: 0,
  },
  price4: {
    type: Number,
    default: 0,
  },
  price5: {
    type: Number,
    default: 0,
  },
  price6: {
    type: Number,
    default: 0,
  },
  price7: {
    type: Number,
    default: 0,
  },
  price8: {
    type: Number,
    default: 0,
  },
  price9: {
    type: Number,
    default: 0,
  },
  lemedian: {
    type: Number,
    default: 0,
  },
  lamoyenne: {
    type: Number,
    default: 0,
  },

  specificcomments: {
    type: String,
  },
  generalcomments: {
    type: String,
  },
  documentshared: {
    type: String,
  },
  filecomments: {
    type: String,
  },
  meta_data: {},
});

module.exports = Menji = mongoose.model("menji", MenjiSchema);
