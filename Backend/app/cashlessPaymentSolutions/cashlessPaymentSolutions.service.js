const { GenerateDataResponse } = require("../../common/commons");
const { cashlessPaymentSchema } = require("./cashlessPaymentSolutions.model");

const getAllcashlessPayments = async () => {
  return await cashlessPaymentSchema.find({});
};

const getcashlessPaymentById = async (id) => {
  return await cashlessPaymentSchema.find({ _id: id });
};
const addNewcashlessPayment = async (cashlessPayment) => {
  const scan = new cashlessPaymentSchema({
    name: cashlessPayment.name,
    supportedMethods: cashlessPayment.supportedMethods,
    integrationKey: cashlessPayment.integrationKey,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New cashless Payment is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatecashlessPaymentData = async (id, cashlessPayment) => {
  try {
    let result = await cashlessPaymentSchema.findByIdAndUpdate(
      id,
      cashlessPayment
    );
    return GenerateDataResponse("cashless Payment Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletecashlessPaymentData = async (id) => {
  try {
    let result = await cashlessPaymentSchema.findByIdAndDelete(id);
    return GenerateDataResponse("cashless Payment is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAllcashlessPayments,
  getcashlessPaymentById,
  addNewcashlessPayment,
  updatecashlessPaymentData,
  deletecashlessPaymentData,
};
