import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Use SendGrid API key 
        api_key: '###'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    const {name, email, number, subject, text} = req.body;

    const data = {
        to: 'example@gmail.com',
        from: email,
        subject: 'Hi there',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };
    try {
        const response = await mailer.sendMail(data);
        res.status(200).send("Email send successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}