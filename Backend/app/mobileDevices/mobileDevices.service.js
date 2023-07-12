const { GenerateDataResponse } = require("../../common/commons");
const { mobileDeviceSchema } = require("./mobileDevices.model");

const getAllmobileDevices = async () => {
  return await mobileDeviceSchema.find({});
};

const getmobileDeviceById = async (id) => {
  return await mobileDeviceSchema.find({ _id: id });
};
const addNewmobileDevice = async (mobileDevice) => {
  const scan = new mobileDeviceSchema({
    name: mobileDevice.name,
    operatingSystem: mobileDevice.operatingSystem,
    connectionType: mobileDevice.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New mobile device is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatemobileDeviceData = async (id, mobileDevice) => {
  try {
    let result = await mobileDeviceSchema.findByIdAndUpdate(id, mobileDevice);
    return GenerateDataResponse("mobile Device Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletemobileDeviceData = async (id) => {
  try {
    let result = await mobileDeviceSchema.findByIdAndDelete(id);
    return GenerateDataResponse("mobile Device is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllmobileDevices,
  getmobileDeviceById,
  addNewmobileDevice,
  updatemobileDeviceData,
  deletemobileDeviceData,
};
