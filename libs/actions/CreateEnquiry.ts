"use server";

import { connectToDb } from "../Database/mongoose";
import EnquiriesModel from "../Models/enquiries";

export async function CreateEnquiryDb(
  name: string,
  email: string,

  message: string,
  company?: string
) {
  await connectToDb();

  try {
    const enquiry = new EnquiriesModel({
      name,
      email,

      message,
      company,
    });

    await enquiry.save();

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
