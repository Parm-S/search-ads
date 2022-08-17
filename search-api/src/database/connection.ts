import mongoose from "mongoose";

const connection = (DB_URL: string) => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to Mongo server");
    })
    .catch((err: unknown) => {
      console.log(err);
    });
};

export { connection };
