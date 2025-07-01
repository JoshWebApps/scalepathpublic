import mongoose, { Schema, Document, model } from "mongoose";

export interface IEnquiries extends Document {
  name: string;
  email: string;

  message: string;
  company?: string;
  createdAt: Date;
  viewed?: boolean;
}

const enquiriesSchema: Schema = new Schema<IEnquiries>({
  name: { type: String, required: true },
  email: { type: String, required: true },

  message: { type: String, required: false },
  company: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  viewed: { type: Boolean, default: false },
});

const EnquiriesModel =
  mongoose.models.Enquiries || model<IEnquiries>("Enquiries", enquiriesSchema);

export default EnquiriesModel;
