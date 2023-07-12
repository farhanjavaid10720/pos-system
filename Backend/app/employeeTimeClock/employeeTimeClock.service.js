const { GenerateDataResponse } = require("../../common/commons");
const { timeClockSchema } = require("./employeeTimeClock.model");

const getAlltimeClocks = async () => {
  return await timeClockSchema.find({});
};

const gettimeClockById = async (id) => {
  return await timeClockSchema.find({ _id: id });
};
const addNewtimeClock = async (timeClock) => {
  const scan = new timeClockSchema({
    name: timeClock.name,
    location: timeClock.location,
    clockType: timeClock.clockType,
  });
  let result = {};
  try {
    let res = await scan.save();
    const responseData = {
      message: "New time clock is added",
      _id: res._id,
    };
    return GenerateDataResponse(responseData);
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const updatetimeClockData = async (id, timeClock) => {
  try {
    let result = await timeClockSchema.findByIdAndUpdate(id, timeClock);
    return GenerateDataResponse("time Clock Record is updated");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};
const deletetimeClockData = async (id) => {
  try {
    let result = await timeClockSchema.findByIdAndDelete(id);
    return GenerateDataResponse("time Clock is removed.");
  } catch (e) {
    return GenerateDataResponse(e["message"], true);
  }
};

module.exports = {
  getAlltimeClocks,
  gettimeClockById,
  addNewtimeClock,
  updatetimeClockData,
  deletetimeClockData,
};
