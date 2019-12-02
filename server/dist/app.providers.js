"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const ErrorHandler_interceptor_1 = require("./interceptors/ErrorHandler.interceptor");
const Logger_interceptor_1 = require("./interceptors/Logger.interceptor");
exports.default = [
    {
        provide: core_1.APP_FILTER,
        useClass: ErrorHandler_interceptor_1.HttpErrorFilter
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: Logger_interceptor_1.LoggingInterceptor
    }
];
//# sourceMappingURL=app.providers.js.map