const { GenerateDataResponse } = require("../../common/commons");
const { selfServiceKioskSchema } = require("./selfServiceKiosk.model");

const getAllselfServiceKiosks = async () => {
  return await selfServiceKioskSchema.find({});
};

const getselfServiceKioskById = async (id) => {
  return await selfServiceKioskSchema.find({ _id: id });
};
const addNewselfServiceKiosk = async (selfServiceKiosk) => {
  const scan = new selfServiceKioskSchema({
    name: selfServiceKiosk.name,
    location: selfServiceKiosk.location,
    paymentMethods: selfServiceKiosk.paymentMethods,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New self Service (Kiosk) is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateselfServiceKioskData = async (id, selfServiceKiosk) => {
  try {
    let result = await selfServiceKioskSchema.findByIdAndUpdate(
      id,
      selfServiceKiosk
    );
    return GenerateDataResponse("self Service (Kiosk)  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteselfServiceKioskData = async (id) => {
  try {
    let result = await selfServiceKioskSchema.findByIdAndDelete(id);
    return GenerateDataResponse("self Service (Kiosk) is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllselfServiceKiosks,
  getselfServiceKioskById,
  addNewselfServiceKiosk,
  updateselfServiceKioskData,
  deleteselfServiceKioskData,
};
