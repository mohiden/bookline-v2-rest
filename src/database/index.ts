import mongoose from "mongoose";
import config from "config";
export const makeConnection = async () => {
  try {
    await mongoose.connect(config.get<string>("dbUri"));
    console.log("Connected to DB.");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
