const mongoose = require("mongoose");

var querySchema = new mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    query: {
      type: String,
      required: [true, "Query is not provided"],
    },
    country: {
        type: String,
        required: [true, "No country name provided"],
    },
    state: {
        type: String,
        required: [true, "No state  provided"],
    },
    district: {
        type: String,
        required: [true, "No City provided"],
    },
    nativeCountry: {
        type: String,
    },
    nativeState: {
        type: String
    },
    nativeDistrict: {
        type: String
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

var queryModal = mongoose.model(
  "query",
  querySchema,
  "queries"
);
module.exports = queryModal;