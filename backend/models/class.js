const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('class', classSchema);
