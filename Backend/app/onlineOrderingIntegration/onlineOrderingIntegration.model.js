// Online Ordering Integration:

// Name: Name or label of the online ordering integration.
// Integration Key: Key or token used for authentication with the online ordering platform API.
// Sync Interval: Time interval for automatic synchronization of online orders.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const onlineOrderingSchema = mongoose.model(
  "onlineOrdering",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    integrationKey: {
      type: String,
      required: true,
    },
    syncInterval: {
      type: Number,
      default: 60,
      min: 1,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { onlineOrderingSchema };
