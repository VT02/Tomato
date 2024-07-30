import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://varchasvtyagi002:4fVYmz6vnUkOsWgv@cluster0.5iwfgrs.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
