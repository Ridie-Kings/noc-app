import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface SendMailOptions {
    to: string;
    subject: string;
    htmlBody: string;
    // todo: Attachments
}

// todo: attachments

export class EmailService {
    private transporter = nodemailer.createTransport({
        host: envs.MAILER_HOST, // Reemplaza con el host SMTP de tu proveedor
        port: 465, // Puede ser 465 (SSL/TLS) o 587 (STARTTLS)
        secure: true, // true para 465, false para 587
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    async sendEmail(options: SendMailOptions):Promise<boolean>  {
        const { to, subject, htmlBody } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                from: envs.MAILER_EMAIL,
                to: to,
                subject: subject,
                html: htmlBody
            });
            console.log(sentInformation)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}