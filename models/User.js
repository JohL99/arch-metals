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
    required: true,
  },

  commodity1: {
    type: String,
    required: true,
  },

  commodity2: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
  geolocation: {
    type: String,
    required: false,
  },
  background: {
    type: String,
    required: false,
  },
  workplace: {
    type: String,
    required: false,
  },
  approach: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  q1: {
    type: String,
    default: "Yes",
    required: true,
  },
  q2: {
    type: String,
    default: "Yes",
    required: true,
  },
  q3: {
    type: String,
    default: "Yes",
    required: true,
  },
  q4: {
    type: String,
    default: "Yes",
    required: true,
  },
  q5: {
    type: String,
    default: "Yes",
    required: true,
  },
  q6: {
    type: String,
    default: "Yes",
    required: true,
  },
  q7: {
    type: String,
    default: "Yes",
    required: true,
  },
  q8: {
    type: String,
    default: "Yes",
    required: true,
  },
  q9: {
    type: String,
    default: "Yes",
    required: true,
  },
  q10: {
    type: String,
    default: "Yes",
    required: true,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
