// Weighing Scale:

// Name: Name or label of the scale.
// Measurement Unit: Unit of measurement used (e.g., grams, kilograms).
// Max Capacity: Maximum weight capacity of the scale.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weighingScaleSchema = mongoose.model(
  "weighingScale",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    measurementUnit: {
      type: String,
      required: true,
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { weighingScaleSchema };
