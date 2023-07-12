const { GenerateDataResponse } = require("../../common/commons");
const { paymentTerminalSchema } = require("./cardPaymentTerminal.model");

const getAllterminals = async () => {
  return await paymentTerminalSchema.find({});
};

const getterminalById = async (id) => {
  return await paymentTerminalSchema.find({ _id: id });
};
const addNewterminal = async (terminal) => {
  const scan = new paymentTerminalSchema({
    id: terminal.id,
    name: terminal.name,
    paymentProcessor: terminal.paymentProcessor,
    connectionType: terminal.connectionType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New terminal is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updateterminalData = async (id, terminal) => {
  try {
    let result = await paymentTerminalSchema.findByIdAndUpdate(id, terminal);
    return GenerateDataResponse("terminal Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deleteterminalData = async (id) => {
  try {
    let result = await paymentTerminalSchema.findByIdAndDelete(id);
    return GenerateDataResponse("terminal is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllterminals,
  getterminalById,
  addNewterminal,
  updateterminalData,
  deleteterminalData,
};
