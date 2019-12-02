import { HttpErrorFilter } from './interceptors/ErrorHandler.interceptor';
import { LoggingInterceptor } from './interceptors/Logger.interceptor';
declare const _default: ({
    provide: string;
    useClass: typeof HttpErrorFilter;
} | {
    provide: string;
    useClass: typeof LoggingInterceptor;
})[];
export default _default;
