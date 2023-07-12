const { GenerateDataResponse } = require("../../common/commons");
const { cashDrawerSchema } = require("./cashDrawer.model");

const getAllcashDrawers = async () => {
  return await cashDrawerSchema.find({});
};

const getcashDrawerById = async (id) => {
  return await cashDrawerSchema.find({ _id: id });
};
const addNewcashDrawer = async (cashDrawer) => {
  const scan = new cashDrawerSchema({
    id: cashDrawer.id,
    name: cashDrawer.name,
    currency: cashDrawer.currency,
    initialAmount: cashDrawer.initialAmount,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New Cash Drawer is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatecashDrawerData = async (id, cashDrawer) => {
  try {
    let result = await cashDrawerSchema.findByIdAndUpdate(id, cashDrawer);
    return GenerateDataResponse("cash Drawer Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletecashDrawerData = async (id) => {
  try {
    let result = await cashDrawerSchema.findByIdAndDelete(id);
    return GenerateDataResponse("cash Drawer is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllcashDrawers,
  getcashDrawerById,
  addNewcashDrawer,
  updatecashDrawerData,
  deletecashDrawerData,
};
