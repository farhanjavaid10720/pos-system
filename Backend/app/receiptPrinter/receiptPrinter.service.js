const { GenerateDataResponse } = require("../../common/commons");
const { receiptPrinterSchema } = require("./receiptPrinter.model");

const getAllreceiptPrinters = async () => {
  return await receiptPrinterSchema.find({});
};

const getreceiptPrinterById = async (id) => {
  return await receiptPrinterSchema.find({ _id: id });
};
const addNewreceiptPrinter = async (receiptPrinter) => {
  const scan = new receiptPrinterSchema({
    name: receiptPrinter.name,
    paperSize: receiptPrinter.paperSize,
    connectionType: receiptPrinter.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New receipt printer  is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatereceiptPrinterData = async (id, receiptPrinter) => {
  try {
    let result = await receiptPrinterSchema.findByIdAndUpdate(
      id,
      receiptPrinter
    );
    return GenerateDataResponse("receipt Printer  is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletereceiptPrinterData = async (id) => {
  try {
    let result = await receiptPrinterSchema.findByIdAndDelete(id);
    return GenerateDataResponse("receipt Printer is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllreceiptPrinters,
  getreceiptPrinterById,
  addNewreceiptPrinter,
  updatereceiptPrinterData,
  deletereceiptPrinterData,
};
