const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    title: { type: String },
    date: { type: Date },
    time: { type: String },
    location: { type: String },
    category: { type: String },
    description: { type: String },
  },
  {
    collection: "Events",
  }
);

module.exports = mongoose.model("Events", eventSchema);
