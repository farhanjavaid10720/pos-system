const { GenerateDataResponse } = require("../../common/commons");
const { cashierTerminalSchema } = require("./cashierTerminal.model");

const getAllcashierTerminals = async () => {
  return await cashierTerminalSchema.find({});
};

const getcashierTerminalById = async (id) => {
  return await cashierTerminalSchema.find({ _id: id });
};
const addNewcashierTerminal = async (cashierTerminal) => {
  const scan = new cashierTerminalSchema({
    name: cashierTerminal.name,
    location: cashierTerminal.location,
    active: cashierTerminal.active,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New cashier Terminal is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatecashierTerminalData = async (id, cashierTerminal) => {
  try {
    let result = await cashierTerminalSchema.findByIdAndUpdate(
      id,
      cashierTerminal
    );
    return GenerateDataResponse("cashier Terminal Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletecashierTerminalData = async (id) => {
  try {
    let result = await cashierTerminalSchema.findByIdAndDelete(id);
    return GenerateDataResponse("cashier Terminal is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllcashierTerminals,
  getcashierTerminalById,
  addNewcashierTerminal,
  updatecashierTerminalData,
  deletecashierTerminalData,
};
