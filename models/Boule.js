const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const BouleSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  commodity: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },

  dateforecast: {
    type: String,
  },
});
module.exports = Boule = mongoose.model("boule", BouleSchema);
