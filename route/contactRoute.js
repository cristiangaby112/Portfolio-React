const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "¡¡Por favor llene todos los campos!!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "cristianbarriento323@gmail.com",
      pass: "1500234cristian",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "cristianbarriento323@gmail.com",
    subject: `message from ${data.name}`,
    html: `
              <h3>Informations<h3/>
              <ul>
              <li>Name: ${data.name}<li/>
              <li>Email: ${data.email}<li/>
              </ul>
              <h3>Message</h3>
              <p>${data.message}<p/>
          `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      res.status(200).json({ msg: "Gracias por contactar a Cristian." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
