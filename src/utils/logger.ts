import { createLogger, format } from "winston";
import winston = require("winston");

const myFormat = format.printf(({level, message, timestamp}) => {
    return `[${timestamp} ${level}: ${message}]`
})

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        myFormat
    ),
    transports:[
        new winston.transports.File({filename: `error.log`, level: 'error'}),
        new winston.transports.Console({level: 'info'}),
        new winston.transports.Console({level: 'debug'}),
        new winston.transports.Console({level: 'warn'})
    ]
})

export default logger