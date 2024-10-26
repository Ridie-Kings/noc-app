import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import path from 'path';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];
}

interface Attachment {
    filename: string;
    path: string;
}

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

    constructor() {}

    async sendEmail(options: SendMailOptions):Promise<boolean>  {
        const { to, subject, htmlBody, attachments = [] } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                from: envs.MAILER_EMAIL,
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachments
            });
            // console.log(sentInformation)
            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent',
                origin: 'EmailService',
            })
            

            return true;
        } catch (error) {
            console.error(error);

            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'EmailService',
            })
            

            return false;
        }
    }

    sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Logs from server';
        const htmlBody = '<h3>Logs from server</h3>';
        const logsPath = path.resolve(process.cwd(), 'logs')
        const attachments: Attachment[] = [
            { filename: 'logs-all.log', path: path.join(logsPath, 'logs-all.log')},
            { filename: 'logs-high.log', path: path.join(logsPath, 'logs-high.log')},
            { filename: 'logs-medium.log', path: path.join(logsPath, 'logs-medium.log')},
        ]

        this.sendEmail({ to, subject, htmlBody, attachments });
    }
}