const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const emailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const emailContent = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Contact Inquiry - ${name}`,
    text: `
Hi, you've received a new inquiry.

Full Name: ${name}
Email Address: ${email}

Message:
${message}
    `
  };

  try {
    const info = await emailTransport.sendMail(emailContent);
    console.log(`Mail delivered: ${info.messageId}`);
    res.status(200).json({ success: true, feedback: 'Thanks for reaching out!' });
  } catch (err) {
    console.error('Email dispatch failed:', err.message);
    res.status(500).json({ success: false, feedback: 'Message could not be delivered.' });
  }
});

app.listen(port, () => {
  console.log(`Contact API running at http://localhost:${port}`);
});
