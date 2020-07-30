import {
    CallHandler,
    ExecutionContext,
    Injectable,
    Logger,
    NestInterceptor
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import path from 'path';
import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { tap } from 'rxjs/operators';
import { logWriter } from '../helpers/LogWriter.helper';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    public async intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest<FastifyRequest>();

        const timestamp = new Date().toLocaleString();
        const method = request.method;
        const url = request.url;
        const now = Date.now();

        Logger.log(`method: ${method}, path: ${url}`, 'LoggingInterceptor');

        return next.handle().pipe(
            tap(async (): Promise<void> => {
                await logWriter.write(
                    path.join(process.cwd(), 'logs', 'requests.log'),
                    `timestamp: ${timestamp}, method: ${method}, path: ${url}, execution time: ${Date.now() - now}ms;\n`
                );
            })
        );
    }
}
