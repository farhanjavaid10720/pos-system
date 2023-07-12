const {
  GenerateDataResponse,
  GenerateResponse,
} = require("../../common/commons");
const { scannerSchema } = require("./barcodeScanner.model");

const getAllScanners = async () => {
  return await scannerSchema.find({});
};

const getScannerById = async (id) => {
  return await scannerSchema.find({ _id: id });
};
const addNewScanner = async (scanner) => {
  const scan = new scannerSchema({
    name: scanner.name,
    type: scanner.type,
    connectionType: scanner.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New Scanner is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateScannerData = async (id, scanner) => {
  try {
    let result = await scannerSchema.findByIdAndUpdate(id, scanner);
    return GenerateDataResponse("Scanner Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteScannerData = async (id) => {
  try {
    let result = await scannerSchema.findByIdAndDelete(id);
    return GenerateDataResponse("Scanner is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllScanners,
  getScannerById,
  addNewScanner,
  updateScannerData,
  deleteScannerData,
};
