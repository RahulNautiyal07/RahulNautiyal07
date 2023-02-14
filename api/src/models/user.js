const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "No building name provided"],
    },
    lastName: {
        type: String,
        required: [true, "No building name provided"],
    },
    email: {
        type:String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        index:{
            unique:true,
        },
        required: [true, "No email provided"],
    },
    phoneNumber: {
        type:String,
        unique:true,
        trim:true,
        required: [true, "No phone number provided"],
    },
    country: {
        type: String,
        required: [true, "No country name provided"],
    },
    state: {
        type: String,
        required: [true, "No state name provided"],
    },
    district: {
      type: String,
      required: [true, "No district name provided"],
    },
    club: {
      type: String
    },
    userType: {
      type: String,
      required: [true, "No UserType  provided"],
    },
    isVolunteer: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

var userModal = mongoose.model(
  "user",
  userSchema,
  "users"
);
module.exports = userModal;