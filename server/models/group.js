const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  groupname: { type: String, unique: false, required: true,},
  creatorid: String,
  members: [String],
});

module.exports = mongoose.model('Group', GroupSchema);