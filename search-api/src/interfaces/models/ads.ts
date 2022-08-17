import { Document } from "mongoose";

interface IAds extends Document {
  _id: number;
  companyId: number;
  primaryText: string;
  headline: string;
  description: string;
  cta: string;
  imageUrl: string;
}

export { IAds };
