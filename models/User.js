const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  altemail: {
    type: String,
    required: false,
  },
  realname: {
    type: String,
    required: false,
  },

  commodity: {
    type: String,
    required: false,
  },
  age: {
    type: String,
  },
  sex: {
    type: String,
    required: false,
  },
  geolocation: {
    type: String,
    required: false,
  },
  professionBackground: {
    type: String,
    required: false,
  },
  workplace: {
    type: String,
    required: false,
  },

  forecastingapproach: {
    type: String,
    required: false,
  },

  bio: {
    type: String,
    required: false,
  },

  cq1: {
    type: String,
    default: "Yes",
  },
  cq2: {
    type: String,
    default: "Yes",
  },
  cq3: {
    type: String,
    default: "Yes",
  },
  cq4: {
    type: String,
    default: "Yes",
  },
  cq5: {
    type: String,
    default: "Yes",
  },
  cq6: {
    type: String,
    default: "Yes",
  },
  cq7: {
    type: String,
    default: "Yes",
  },
  cq8: {
    type: String,
    default: "Yes",
  },
  cq9: {
    type: String,
    default: "Yes",
  },
  cq10: {
    type: String,
    default: "Yes",
  },
  cq11: {
    type: String,
    default: "Yes",
  },
  cq12: {
    type: String,
    default: "Yes",
  },
});

module.exports = User = mongoose.model("users", UserSchema);
