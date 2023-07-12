const { GenerateDataResponse } = require("../../common/commons");
const { itemDisplaySchema } = require("./order-itemDisplay.model");

const getAllitemDisplays = async () => {
  return await itemDisplaySchema.find({});
};

const getitemDisplayById = async (id) => {
  return await itemDisplaySchema.find({ _id: id });
};
const addNewitemDisplay = async (itemDisplay) => {
  const scan = new itemDisplaySchema({
    name: itemDisplay.name,
    displayType: itemDisplay.displayType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New item dispaly is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateitemDisplayData = async (id, itemDisplay) => {
  try {
    let result = await itemDisplaySchema.findByIdAndUpdate(id, itemDisplay);
    return GenerateDataResponse("item display  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteitemDisplayData = async (id) => {
  try {
    let result = await itemDisplaySchema.findByIdAndDelete(id);
    return GenerateDataResponse("item display is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllitemDisplays,
  getitemDisplayById,
  addNewitemDisplay,
  updateitemDisplayData,
  deleteitemDisplayData,
};
