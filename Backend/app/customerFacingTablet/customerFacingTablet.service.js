const { GenerateDataResponse } = require("../../common/commons");
const { customerTabletSchema } = require("./customerFacingTablet.model");

const getAllcustomerTablets = async () => {
  return await customerTabletSchema.find({});
};

const getcustomerTabletById = async (id) => {
  return await customerTabletSchema.find({ _id: id });
};
const addNewcustomerTablet = async (customerTablet) => {
  const scan = new customerTabletSchema({
    name: customerTablet.name,
    operatingSystem: customerTablet.operatingSystem,
    screenSize: customerTablet.screenSize,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New Customer Tablet is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatecustomerTabletData = async (id, customerTablet) => {
  try {
    let result = await customerTabletSchema.findByIdAndUpdate(
      id,
      customerTablet
    );
    return GenerateDataResponse("customer Tablet Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletecustomerTabletData = async (id) => {
  try {
    let result = await customerTabletSchema.findByIdAndDelete(id);
    return GenerateDataResponse("customer Tablet is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllcustomerTablets,
  getcustomerTabletById,
  addNewcustomerTablet,
  updatecustomerTabletData,
  deletecustomerTabletData,
};
