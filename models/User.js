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
  cq1: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq2: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq3: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq4: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq5: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq6: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq7: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq8: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq9: {
    type: String,
    default: "Yes",
    required: true,
  },
  cq10: {
    type: String,
    default: "Yes",
    required: true,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
