import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandboxed5354abd43e4e6494a4504d1946080d.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
    const emailData = {
        from: "1982gaya@gmail.com",
        to: "1982gaya@gmail.com",
        subject,
        html
    };
    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hello! ${fullName}, please verify your email`;
    const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
    return sendEmail(emailSubject, emailBody);
}