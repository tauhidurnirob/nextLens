import nodemailer from "nodemailer";
const sendMail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "djangomaster7023@gmail.com",
      pass: "ShakiB7023956841", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "support.next-lens@gmail.com",
    to: "shakiba448@gmail.com",
    subject: "Invoices due",
    text: "Dudes, we really need your money.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export default sendMail;
