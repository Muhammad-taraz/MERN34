const nodemailer = require("nodemailer");
const path = require("path");

var hbs = require("nodemailer-express-handlebars");

const handlebarOptions = {
  viewEngine: {
    extName: ".hbs",
    partialsDir: path.resolve("./views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views"),
  extName: ".hbs",
};

const notifyEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  transporter.use("compile", hbs(handlebarOptions));

  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    template: "notify",
    context: {
      count: options.count,
      // userName: "options.name",
      // emailAddress: "options.email",
      // password: "options.password",
    },
  };

  const { accepted, ...rest } = await transporter.sendMail(message);
  console.log({ ...rest, accepted });
  if (accepted.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = notifyEmail;
