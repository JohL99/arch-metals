const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ForecastSchema = new Schema({
  user: {
    type: String,
  },
  commodity: {
    type: String,
  },
  mois: {
    type: String,
  },
  dateForecast: {
    type: String,
  },
  price1: {
    type: String,
  },
  price2: {
    type: String,
  },
  price3: {
    type: String,
  },
  price4: {
    type: String,
  },
  price5: {
    type: String,
  },
  price6: {
    type: String,
  },
  price7: {
    type: String,
  },
  price8: {
    type: String,
  },
  price9: {
    type: String,
    required: false,
  },
  lemedian: {
    type: Number,
    default: 0,
  },
  lamoyenne: {
    type: Number,
    default: 0,
  },
  specificComments: {
    type: String,
  },
  generalcomments: {
    type: String,
  },
  documentShared: {
    type: String,
  },
});

module.exports = Forecast = mongoose.model("forecasts", ForecastSchema);
