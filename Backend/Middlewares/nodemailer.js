import nodemailer from 'nodemailer';
const nodemailerPass = process.env.NODEMAILER_PASS;

export const sendWelcomeEmail = async (to, username, amount) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: 'vanshkalra1379@gmail.com',
                pass: nodemailerPass
            }
        });

        const mailOptions = {
            from: "vanshkalra1379@gmail.com", // sender address
            to, // receiver address
            subject: "Welcome to V-Pay!", // Subject line
            text: `Hello ${username},\n\nWelcome to V-Pay! Your account has been created successfully. We have credited your account with $${amount}.\n\nThank you for joining us!`, // plain text body
            html: `<p>Hello ${username},</p><p>Welcome to V-Pay! Your account has been created successfully. We have credited your account with $${amount}.</p><p>Thank you for joining us!</p>` // html body
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Message sent: %s", info.messageId);
        return info;


    } catch (err) {
        console.error("Error sending email:", err);
    }
};
