import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: process.env.mailtrap_smtp_host,
            port: process.env.mailtrap_smtp_port,
            secure: false,
            auth: {
                user: process.env.mailtrap_smtp_user,
                pass: process.env.mailtrap_smtp_password,
            },
        });

        await transporter.sendMail({
            from: 'support@gmail.com',
            to,
            subject,
            text,
        });
        console.log("Email sent successfully",info.messageId);
        return info;
    } catch (error) {
        console.log(error);
    }
};

export default sendEmail;
