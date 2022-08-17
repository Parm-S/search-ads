import { Schema, model } from "mongoose";

import { IAds } from "../interfaces/models/ads";

import { autoIncrementModelId } from "./Counter";

const adsSchema = new Schema<IAds>({
  _id: {
    type: Number,
    unique: true,
    min: 1,
    required:true
  },
  companyId: {
    type: Number,
    ref: 'companySchema'
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

adsSchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelId("adsSchema", this, next);
});

const AdsModel = model("adsSchema", adsSchema);

export { AdsModel };
