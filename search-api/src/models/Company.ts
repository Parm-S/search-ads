import { Schema, model, CallbackWithoutResultAndOptionalError } from "mongoose";

import { ICompany } from "../interfaces/models/company";

import { autoIncrementModelId } from "./Counter";

const companySchema = new Schema<ICompany>({
  _id: {
    type: Number,
    min: 1,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

companySchema.pre(
  "save",
  function (next: CallbackWithoutResultAndOptionalError) {
    if (!this.isNew) {
      next();
      return;
    }
    autoIncrementModelId("companySchema", this, next);
  }
);

const CompanyModel = model("companySchema", companySchema);

export { CompanyModel };
