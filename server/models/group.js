const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  groupName: { type: String, unique: false, required: true,},
  userId: String,
  members: [String],
});

module.exports = mongoose.model('Group', GroupSchema);