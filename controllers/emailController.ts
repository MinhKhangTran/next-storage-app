import nodemailer from "nodemailer";
import Mailgen from "mailgen";

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const contactEmail = async (data: any) => {
  try {
    let mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Storage App",
        link: "http://storage_app_mkt.com",
      },
    });

    const email = {
      body: {
        name: "MKT",
        intro: [
          "Hallo, Eine Nachricht vom Storage App",
          `From:  ${data.email}`,
          `Name:  ${data.name}`,
          `Message:  ${data.message}`,
        ],
        outro: "Bis zum nächsten mal",
      },
    };

    let emailBody = mailGenerator.generate(email);
    let message = {
      from: "ongnuoc93@gmail.com",
      to: "ongnuoc93@gmail.com",
      subject: "Contacted received",
      html: emailBody,
    };

    await transporter.sendMail(message);
    return true;
  } catch (error) {
    throw error;
  }
};
