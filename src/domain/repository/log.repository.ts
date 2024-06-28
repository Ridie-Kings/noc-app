import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

/**
 * @abstract
 * abstract sirve para que no se pueda instanciar la clase, solo se puede heredar
 */
export abstract class LogRepository {
    abstract saveLog( log: LogEntity ): Promise<void>;
    abstract getLogs( severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}