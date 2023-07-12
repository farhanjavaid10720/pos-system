const { GenerateDataResponse } = require("../../common/commons");
const { kitchenDisplaySchema } = require("./kitchenDisplaySystem.model");

const getAllkitchenDisplays = async () => {
  return await kitchenDisplaySchema.find({});
};

const getkitchenDisplayById = async (id) => {
  return await kitchenDisplaySchema.find({ _id: id });
};
const addNewkitchenDisplay = async (kitchenDisplay) => {
  const scan = new kitchenDisplaySchema({
    name: kitchenDisplay.name,
    displayType: kitchenDisplay.displayType,
    orderStatus: kitchenDisplay.orderStatus,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New kitchen display  is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatekitchenDisplayData = async (id, kitchenDisplay) => {
  try {
    let result = await kitchenDisplaySchema.findByIdAndUpdate(
      id,
      kitchenDisplay
    );
    return GenerateDataResponse("kitchen Display Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletekitchenDisplayData = async (id) => {
  try {
    let result = await kitchenDisplaySchema.findByIdAndDelete(id);
    return GenerateDataResponse("kitchen Display is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllkitchenDisplays,
  getkitchenDisplayById,
  addNewkitchenDisplay,
  updatekitchenDisplayData,
  deletekitchenDisplayData,
};
