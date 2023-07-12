// Barcode/QR Code Scanner:

// Name: Name or label of the scanner.
// Type: Type or model of the scanner (e.g., laser scanner, 2D scanner).
// Connection Type: Type of connection used (e.g., USB, Bluetooth).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scannerSchema = mongoose.model(
  "scanners",
  new Schema({
    name: { type: String, required: true, lowercase: true },

    type: {
      type: String,
      required: true,
    },

    connectionType: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { scannerSchema };
