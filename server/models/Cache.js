const mongoose = require("mongoose");

const CacheSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  foundCount: { type: Number, default: 0 }
});

module.exports = mongoose.model("Cache", CacheSchema);
