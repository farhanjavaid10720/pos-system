// Security Cameras:

// Name: Name or label of the security camera.
// Location: Location or area covered by the security camera.
// Camera Type: Type or model of the security camera.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const securityCameraSchema = mongoose.model(
  "securityCamera",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    location: {
      type: String,
      required: true,
    },
    cameraType: {
      type: String,
      required: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { securityCameraSchema };
