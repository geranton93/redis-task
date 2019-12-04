import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import * as fs from 'fs';
import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    public async intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest<FastifyRequest>();

        const timestamp = new Date().toLocaleString();
        const method = request.req.method;
        const path = request.req.url;
        const now = Date.now();

        Logger.log(`method: ${method}, path: ${path}`, 'LoggingInterceptor');

        fs.createWriteStream(`${process.cwd()}/logs/requests.log`, {
            encoding: 'utf8',
            flags: 'a+'
        }).write(`timestamp: ${timestamp}, method: ${method}, path: ${path}, `);

        return next.handle().pipe(
            tap(() => {
                fs.createWriteStream(`${process.cwd()}/logs/requests.log`, {
                    encoding: 'utf8',
                    flags: 'a+'
                }).write(`execution time: ${Date.now() - now}ms;\n`);
            })
        );
    }
}
