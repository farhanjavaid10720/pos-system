// Inventory Management System:

// Name: Name or label of the inventory management system.
// Integration Key: Key or token used for authentication with the inventory management system API.
// Sync Interval: Time interval for automatic synchronization of inventory data.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventoryManagementSchema = mongoose.model(
  "inventoryManagement",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    integrationKey: {
      type: String,
      required: true,
    },
    syncInterval: {
      type: Number,
      default: 24,
      min: 1,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { inventoryManagementSchema };
