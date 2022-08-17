import { Document } from "mongoose";

interface ICompany extends Document {
  _id: number;
  name: string;
  url: string;
}

export { ICompany };
