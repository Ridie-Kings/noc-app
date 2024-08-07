
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;
}
export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor( options: LogEntityOptions) {
        const {level, message, origin, createdAt = new Date()} = options;
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
        this.origin = origin;
    }

    static fromJson = (json: string):LogEntity => {
        const {message, level, createdAt, origin} = JSON.parse(json);

        if (!message) throw new Error('Invalid message');
        if (!level) throw new Error('Invalid level');
        if (!createdAt) throw new Error('Invalid createdAt');

        const log = new LogEntity({
            message, 
            level,
            createdAt,
            origin
        });
        
        return log;
    }
}