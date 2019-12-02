import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
    Logger
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import * as fs from 'fs';
import { ServerResponse } from 'http';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    public async catch(
        exception: HttpException,
        host: ArgumentsHost
    ): Promise<void> {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<FastifyReply<ServerResponse>>();
        const request = ctx.getRequest<FastifyRequest>();

        const status = exception.getStatus
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleString(),
            path: request.req.url,
            method: request.req.method,
            message: exception.message.error || exception.message || null
        };

        const { code, method, path, message, timestamp } = errorResponse;

        Logger.error(
            `code ${code}, method: ${method}, path: ${path}`,
            `message: ${message}`,
            'ErrorHandler'
        );

        fs.createWriteStream(`${process.cwd()}/logs/errors.log`, {
            encoding: 'utf8',
            flags: 'a+'
        }).write(
            `timestamp: ${timestamp} code ${code}, method: ${method}, path: ${path} message: ${message};\n`
        );

        response.status(status).send(errorResponse);
    }
}
