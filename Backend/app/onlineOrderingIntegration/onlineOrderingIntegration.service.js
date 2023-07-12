const { GenerateDataResponse } = require("../../common/commons");
const { onlineOrderingSchema } = require("./onlineOrderingIntegration.model");

const getAllonlineOrderings = async () => {
  return await onlineOrderingSchema.find({});
};

const getonlineOrderingById = async (id) => {
  return await onlineOrderingSchema.find({ _id: id });
};
const addNewonlineOrdering = async (onlineOrdering) => {
  const scan = new onlineOrderingSchema({
    name: onlineOrdering.name,
    integrationKey: onlineOrdering.integrationKey,
    syncInterval: onlineOrdering.syncInterval,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New online ordering is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateonlineOrderingData = async (id, onlineOrdering) => {
  try {
    let result = await onlineOrderingSchema.findByIdAndUpdate(
      id,
      onlineOrdering
    );
    return GenerateDataResponse("online Ordering Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteonlineOrderingData = async (id) => {
  try {
    let result = await onlineOrderingSchema.findByIdAndDelete(id);
    return GenerateDataResponse("online Ordering is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllonlineOrderings,
  getonlineOrderingById,
  addNewonlineOrdering,
  updateonlineOrderingData,
  deleteonlineOrderingData,
};
