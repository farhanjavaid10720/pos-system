// Mobile Devices:

// Name: Name or label of the mobile device.
// Operating System: Operating system running on the device (e.g., iOS, Android).
// Connection Type: Type of connection used (e.g., Wi-Fi, cellular).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileDeviceSchema = mongoose.model(
  "mobileDevice",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    operatingSystem: {
      type: String,
      required: true,
    },
    connectionType: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { mobileDeviceSchema };
