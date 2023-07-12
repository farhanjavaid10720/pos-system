const { GenerateDataResponse } = require("../../common/commons");
const { weighingScaleSchema } = require("./weighingScale.model");

const getAllweighingScales = async () => {
  return await weighingScaleSchema.find({});
};

const getweighingScaleById = async (id) => {
  return await weighingScaleSchema.find({ _id: id });
};
const addNewweighingScale = async (weighingScale) => {
  const scan = new weighingScaleSchema({
    name: weighingScale.name,
    measurementUnit: weighingScale.measurementUnit,
    maxCapacity: weighingScale.maxCapacity,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New weighing scale is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateweighingScaleData = async (id, weighingScale) => {
  try {
    let result = await weighingScaleSchema.findByIdAndUpdate(id, weighingScale);
    return GenerateDataResponse("weighing Scale  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteweighingScaleData = async (id) => {
  try {
    let result = await weighingScaleSchema.findByIdAndDelete(id);
    return GenerateDataResponse("weighing Scale is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllweighingScales,
  getweighingScaleById,
  addNewweighingScale,
  updateweighingScaleData,
  deleteweighingScaleData,
};
