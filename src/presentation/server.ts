import { envs } from '../config/plugins/envs.plugin';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';



const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)

export class Server {
    public static start () {
        console.log('Server started...')


        // const emailService = new EmailService()
        // emailService.sendEmail({
        //     to: 'anabgspam@gmail.com',
        //     subject: 'Log from Node.js',
        //     htmlBody: '<h3>Hello from Node.js</h3>'
        // })

        
    //    CronService.createJob(
    //     '*/5 * * * * *',
    //     () => {
    //         // new CheckService().execute('http://localhost:3000')
    //         // new CheckService().execute('https://google.com')
    //         const url = 'https://google.com'
    //         new CheckService(
    //             fileSystemLogRepository,
    //             () => console.log(`${url} is up!`),
    //             (error) => console.log(`${error}`),
    //         ).execute(url);
    //     }
    //    )
       
    }
}