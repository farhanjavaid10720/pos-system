const { GenerateDataResponse } = require("../../common/commons");
const { kitchenPrinterSchema } = require("./kitchenPrinter.model");

const getAllkitchenPrinters = async () => {
  return await kitchenPrinterSchema.find({});
};

const getkitchenPrinterById = async (id) => {
  return await kitchenPrinterSchema.find({ _id: id });
};
const addNewkitchenPrinter = async (kitchenPrinter) => {
  const scan = new kitchenPrinterSchema({
    name: kitchenPrinter.name,
    paperSize: kitchenPrinter.paperSize,
    connectionType: kitchenPrinter.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New kitchen printer is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatekitchenPrinterData = async (id, kitchenPrinter) => {
  try {
    let result = await kitchenPrinterSchema.findByIdAndUpdate(
      id,
      kitchenPrinter
    );
    return GenerateDataResponse("kitchen Printer Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletekitchenPrinterData = async (id) => {
  try {
    let result = await kitchenPrinterSchema.findByIdAndDelete(id);
    return GenerateDataResponse("kitchen Printer is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllkitchenPrinters,
  getkitchenPrinterById,
  addNewkitchenPrinter,
  updatekitchenPrinterData,
  deletekitchenPrinterData,
};
