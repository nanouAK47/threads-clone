import mongoose from "mongoose";

let isConnected = false; // voir si mongoose est connecté

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Connecté");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log("Connecté à MongoDB");
  } catch (error) {
    console.log(error);
  }
};
