"use server";

import nodemailer from "nodemailer";
import { CreateEnquiryDb } from "./CreateEnquiry";

export async function sendMail({
  name,
  subject,
  email,
  message,
  company,
}: {
  name: string;
  subject: string;
  email: string;

  message: string;
  company: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error: any) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: "kingjoshspike@gmail.com",
      subject,
      html: `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Roboto, sans-serif; color: #333333; max-width: 600px; margin: auto; border-collapse: collapse;">
    <tr>
      <td colspan="2" style="padding: 20px 0; text-align: center; border-bottom: 2px solid #000000;">
      <h1 style="margin: 0; font-size: 60px; color: #000000 ;">ScalePath</h1>
        <h2 style="margin: 0; font-size: 45px; color: #000000;">Contact Enquiry</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: bold; font-size: 24px; vertical-align: top; width: 150px;">Name:</td>
      <td style="padding: 15px; vertical-align: top; font-size: 24px;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: bold; vertical-align: top; font-size: 24px;">Email:</td>
      <td style="padding: 15px; vertical-align: top; font-size: 24px;">${email}</td>
    </tr>
    <tr>
      <td style="padding: 15px; font-weight: bold; vertical-align: top; font-size: 24px;">Company:</td>
      <td style="padding: 15px; vertical-align: top; font-size: 24px;">${company}</td>
    </tr>
   
    <tr>
      <td style="padding: 15px; font-weight: bold; vertical-align: top; font-size: 24px;">Message:</td>
      <td style="padding: 15px; vertical-align: top;">${message}</td>
    </tr>
  </table>
`,
    });

    const DbEnquiry = await CreateEnquiryDb(name, email, message, company);

    if (DbEnquiry) {
      console.log("Enquiry successfully saved to database");
    } else {
      console.log("Enquiry not saved to database, check logs");
    }

    console.log(sendResult);
  } catch (error) {
    console.log(error);
    return;
  }
}
