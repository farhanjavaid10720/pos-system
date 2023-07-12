// Signature Capture Device:

// Name: Name or label of the signature capture device.
// Device Type: Type or model of the signature capture device.
// Connection Type: Type of connection used (e.g., USB, Bluetooth).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signatureCaptureSchema = mongoose.model(
  "signatureCapture",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    deviceType: {
      type: String,
      required: true,
    },
    connectionType: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { signatureCaptureSchema };
