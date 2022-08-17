import { Schema, model } from "mongoose";

import { ICompany } from "../interfaces/models/company";

import { autoIncrementModelId } from "./Counter";

const companySchema = new Schema<ICompany>({
  _id: {
    type: Number,
    unique: true,
    min: 1,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

companySchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelId("companySchema", this, next);
});

const CompanyModel = model("companySchema", companySchema);

export { CompanyModel };
