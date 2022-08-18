import mongoose, { CallbackWithoutResultAndOptionalError, Document } from "mongoose";

const Schema = mongoose.Schema;

const counterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

counterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const CounterModel = mongoose.model("counterSchema", counterSchema);

const autoIncrementModelId = (modelName: string, document: Document, next : CallbackWithoutResultAndOptionalError) => {
  CounterModel.findByIdAndUpdate(
    modelName,
    { $inc: { seq: 1 } },
    {
      new: true,
      upsert: true,
    },
    (error, counter) => {
      if (error) {
        return next(error);
      }
      document._id = counter.seq;
      next();
    }
  );
};

export { autoIncrementModelId };
