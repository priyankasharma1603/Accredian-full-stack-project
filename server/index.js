// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/referrals', async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: { referrerName, referrerEmail, refereeName, refereeEmail },
    });

    // Send referral email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: refereeEmail,
      subject: 'You have been referred!',
      text: `Hello ${refereeName},\n\n${referrerName} has referred you to our platform. Please join us to earn rewards!\n\nBest regards,\nThe Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send referral email' });
      }
      console.log('Email sent:', info.response);
    });

    res.status(201).json(newReferral);
  } catch (error) {
    console.error('Error creating referral:', error);
    res.status(500).json({ error: 'Failed to create referral' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
