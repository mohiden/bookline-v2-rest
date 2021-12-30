import mongoose from "mongoose";
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.cvuzm.mongodb.net/main?retryWrites=true&w=majority`;
export const makeConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to DB.");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
