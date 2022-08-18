import { Schema, model, CallbackWithoutResultAndOptionalError } from "mongoose";

import { IAds } from "../interfaces/models/ads";

import { autoIncrementModelId } from "./Counter";

const adsSchema = new Schema<IAds>({
  _id: {
    type: Number,
    min: 1,
  },
  companyId: {
    type: Number,
    ref: "companySchema",
  },
  primaryText: {
    type: String,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
  },
  cta: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

adsSchema.pre("save", function (next: CallbackWithoutResultAndOptionalError) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelId("adsSchema", this, next);
});

const AdsModel = model("adsSchema", adsSchema);

export { AdsModel };
