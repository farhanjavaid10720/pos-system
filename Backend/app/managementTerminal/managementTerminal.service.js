const { GenerateDataResponse } = require("../../common/commons");
const { managementTerminalSchema } = require("./managementTerminal.model");

const getAllmanagementTerminals = async () => {
  return await managementTerminalSchema.find({});
};

const getmanagementTerminalById = async (id) => {
  return await managementTerminalSchema.find({ _id: id });
};
const addNewmanagementTerminal = async (managementTerminal) => {
  const scan = new managementTerminalSchema({
    name: managementTerminal.name,
    accessLevel: managementTerminal.accessLevel,
    functionality: managementTerminal.functionality,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New management terminal  is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatemanagementTerminalData = async (id, managementTerminal) => {
  try {
    let result = await managementTerminalSchema.findByIdAndUpdate(
      id,
      managementTerminal
    );
    return GenerateDataResponse("management Terminal Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletemanagementTerminalData = async (id) => {
  try {
    let result = await managementTerminalSchema.findByIdAndDelete(id);
    return GenerateDataResponse("management Terminal is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllmanagementTerminals,
  getmanagementTerminalById,
  addNewmanagementTerminal,
  updatemanagementTerminalData,
  deletemanagementTerminalData,
};
