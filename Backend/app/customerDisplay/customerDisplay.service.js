const { GenerateDataResponse } = require("../../common/commons");
const { customerDisplaySchema } = require("./customerDisplay.model");

const getAllcustomerDisplays = async () => {
  return await customerDisplaySchema.find({});
};

const getcustomerDisplayById = async (id) => {
  return await customerDisplaySchema.find({ _id: id });
};
const addNewcustomerDisplay = async (customerDisplay) => {
  const scan = new customerDisplaySchema({
    name: customerDisplay.name,
    type: customerDisplay.type,
    screenSize: customerDisplay.screenSize,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New Customer Display is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatecustomerDisplayData = async (id, customerDisplay) => {
  try {
    let result = await customerDisplaySchema.findByIdAndUpdate(
      id,
      customerDisplay
    );
    return GenerateDataResponse("customer Display Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletecustomerDisplayData = async (id) => {
  try {
    let result = await customerDisplaySchema.findByIdAndDelete(id);
    return GenerateDataResponse("customer Display is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllcustomerDisplays,
  getcustomerDisplayById,
  addNewcustomerDisplay,
  updatecustomerDisplayData,
  deletecustomerDisplayData,
};
