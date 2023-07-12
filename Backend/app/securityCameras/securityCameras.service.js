const { GenerateDataResponse } = require("../../common/commons");
const { securityCameraSchema } = require("./securityCameras.model");

const getAllsecurityCameras = async () => {
  return await securityCameraSchema.find({});
};

const getsecurityCameraById = async (id) => {
  return await securityCameraSchema.find({ _id: id });
};
const addNewsecurityCamera = async (securityCamera) => {
  const scan = new securityCameraSchema({
    name: securityCamera.name,
    location: securityCamera.location,
    cameraType: securityCamera.cameraType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New security camera  is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatesecurityCameraData = async (id, securityCamera) => {
  try {
    let result = await securityCameraSchema.findByIdAndUpdate(
      id,
      securityCamera
    );
    return GenerateDataResponse("security Camera  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletesecurityCameraData = async (id) => {
  try {
    let result = await securityCameraSchema.findByIdAndDelete(id);
    return GenerateDataResponse("security Camera is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllsecurityCameras,
  getsecurityCameraById,
  addNewsecurityCamera,
  updatesecurityCameraData,
  deletesecurityCameraData,
};
