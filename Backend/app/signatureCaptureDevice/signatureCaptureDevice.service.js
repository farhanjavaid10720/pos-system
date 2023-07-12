const { GenerateDataResponse } = require("../../common/commons");
const { signatureCaptureSchema } = require("./signatureCaptureDevice.model");

const getAllsignatureCaptures = async () => {
  return await signatureCaptureSchema.find({});
};

const getsignatureCaptureById = async (id) => {
  return await signatureCaptureSchema.find({ _id: id });
};
const addNewsignatureCapture = async (signatureCapture) => {
  const scan = new signatureCaptureSchema({
    name: signatureCapture.name,
    deviceType: signatureCapture.deviceType,
    connectionType: signatureCapture.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New signature capture is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatesignatureCaptureData = async (id, signatureCapture) => {
  try {
    let result = await signatureCaptureSchema.findByIdAndUpdate(
      id,
      signatureCapture
    );
    return GenerateDataResponse("signature Capture  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletesignatureCaptureData = async (id) => {
  try {
    let result = await signatureCaptureSchema.findByIdAndDelete(id);
    return GenerateDataResponse("signature Capture is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllsignatureCaptures,
  getsignatureCaptureById,
  addNewsignatureCapture,
  updatesignatureCaptureData,
  deletesignatureCaptureData,
};
