const { GenerateDataResponse } = require("../../common/commons");
const { poleDisplaySchema } = require("./poleDisplay.model");

const getAllpoleDisplays = async () => {
  return await poleDisplaySchema.find({});
};

const getpoleDisplayById = async (id) => {
  return await poleDisplaySchema.find({ _id: id });
};
const addNewpoleDisplay = async (poleDisplay) => {
  const scan = new poleDisplaySchema({
    name: poleDisplay.name,
    displayType: poleDisplay.displayType,
    connectionType: poleDisplay.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New pole display  is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatepoleDisplayData = async (id, poleDisplay) => {
  try {
    let result = await poleDisplaySchema.findByIdAndUpdate(id, poleDisplay);
    return GenerateDataResponse("pole Display  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletepoleDisplayData = async (id) => {
  try {
    let result = await poleDisplaySchema.findByIdAndDelete(id);
    return GenerateDataResponse("pole Display is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllpoleDisplays,
  getpoleDisplayById,
  addNewpoleDisplay,
  updatepoleDisplayData,
  deletepoleDisplayData,
};
