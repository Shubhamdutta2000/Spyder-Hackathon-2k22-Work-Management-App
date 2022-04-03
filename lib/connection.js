import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const connectToDb = async () => {
  const conn = await mongoose.createConnection(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  return conn;
};
