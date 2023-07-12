const { GenerateDataResponse } = require("../../common/commons");
const { voucherScannerSchema } = require("./voucherCouponScanner.model");

const getAllvoucherScanners = async () => {
  return await voucherScannerSchema.find({});
};

const getvoucherScannerById = async (id) => {
  return await voucherScannerSchema.find({ _id: id });
};
const addNewvoucherScanner = async (voucherScanner) => {
  const scan = new voucherScannerSchema({
    name: voucherScanner.name,
    type: voucherScanner.type,
    connectionType: voucherScanner.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New voucher scanner is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatevoucherScannerData = async (id, voucherScanner) => {
  try {
    let result = await voucherScannerSchema.findByIdAndUpdate(
      id,
      voucherScanner
    );
    return GenerateDataResponse("voucher Scanner  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletevoucherScannerData = async (id) => {
  try {
    let result = await voucherScannerSchema.findByIdAndDelete(id);
    return GenerateDataResponse("voucher Scanner is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllvoucherScanners,
  getvoucherScannerById,
  addNewvoucherScanner,
  updatevoucherScannerData,
  deletevoucherScannerData,
};
