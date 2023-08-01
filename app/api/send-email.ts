import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  // Create a transporter with your email server configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pigeonhatcollective@gmail.com', // Replace with your Gmail email address
      pass: 'pig30nh4tz', // Replace with your Gmail password or app password
    },

  });

  // Configure the email options
  const mailOptions = {
    from: 'feedback@aubrey.digital',
    to: 'aubreylanelv@gmail.com',
    subject: 'User Feedback',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
}
