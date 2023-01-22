// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
const { EMAIL, EMAIL_PASS } = process.env;

export default async function handler(req, res) {
  const data = req.body;
  const dataParse = JSON.parse(data);

  const message = {
    from: EMAIL,
    to: EMAIL,
    subject: "No Reply",
    text: "Nuevos datos enviados del formulario de contacto BAX",
    html: `<ul>
                <li>Nombre: <b>${dataParse.name}</b></li>
                <li>Correo: <b>${dataParse.email}</b></li>
                <li>Mensaje: <b>${dataParse.msg}</b></li>
          </ul>`,
  };

  let tranporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS,
    },

    tls: { rejectUnauthorized: false },
  });

  if (req.method === "POST") {
    try {
      await tranporter.sendMail(message);
      return res.status(200).json({ message: true });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

