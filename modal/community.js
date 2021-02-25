const mongoose = require("mongoose");

//Defining schema for the database
const CommunitySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publication: {
    type: String,
    required: true,
  },
  postedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Community", CommunitySchema);
