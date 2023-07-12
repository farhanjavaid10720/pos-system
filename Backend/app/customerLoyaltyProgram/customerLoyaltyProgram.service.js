const { GenerateDataResponse } = require("../../common/commons");
const { loyaltyProgramSchema } = require("./customerLoyaltyProgram.model");

const getAllloyaltyPrograms = async () => {
  return await loyaltyProgramSchema.find({});
};

const getloyaltyProgramById = async (id) => {
  return await loyaltyProgramSchema.find({ _id: id });
};
const addNewloyaltyProgram = async (loyaltyProgram) => {
  const scan = new loyaltyProgramSchema({
    name: loyaltyProgram.name,
    loyaltyProgramId: loyaltyProgram.loyaltyProgramId,
    integrationKey: loyaltyProgram.integrationKey,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New loyalty program  is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateloyaltyProgramData = async (id, loyaltyProgram) => {
  try {
    let result = await loyaltyProgramSchema.findByIdAndUpdate(
      id,
      loyaltyProgram
    );
    return GenerateDataResponse("loyalty Program Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteloyaltyProgramData = async (id) => {
  try {
    let result = await loyaltyProgramSchema.findByIdAndDelete(id);
    return GenerateDataResponse("loyalty Program is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllloyaltyPrograms,
  getloyaltyProgramById,
  addNewloyaltyProgram,
  updateloyaltyProgramData,
  deleteloyaltyProgramData,
};
