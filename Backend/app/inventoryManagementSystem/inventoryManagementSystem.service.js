const { GenerateDataResponse } = require("../../common/commons");
const {
  inventoryManagementSchema,
} = require("./inventoryManagementSystem.model");

const getAllinventoryManagements = async () => {
  return await inventoryManagementSchema.find({});
};

const getinventoryManagementById = async (id) => {
  return await inventoryManagementSchema.find({ _id: id });
};
const addNewinventoryManagement = async (inventoryManagement) => {
  const scan = new inventoryManagementSchema({
    name: inventoryManagement.name,
    integrationKey: inventoryManagement.integrationKey,
    syncInterval: inventoryManagement.syncInterval,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New inventory management system is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateinventoryManagementData = async (id, inventoryManagement) => {
  try {
    let result = await inventoryManagementSchema.findByIdAndUpdate(
      id,
      inventoryManagement
    );
    return GenerateDataResponse("inventory Management Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteinventoryManagementData = async (id) => {
  try {
    let result = await inventoryManagementSchema.findByIdAndDelete(id);
    return GenerateDataResponse("inventory Management is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllinventoryManagements,
  getinventoryManagementById,
  addNewinventoryManagement,
  updateinventoryManagementData,
  deleteinventoryManagementData,
};
