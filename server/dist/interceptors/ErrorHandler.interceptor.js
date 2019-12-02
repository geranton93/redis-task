"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
let HttpErrorFilter = class HttpErrorFilter {
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleString(),
            path: request.req.url,
            method: request.req.method,
            message: exception.message.error || exception.message || null
        };
        const { code, method, path, message, timestamp } = errorResponse;
        common_1.Logger.error(`code ${code}, method: ${method}, path: ${path}`, `message: ${message}`, 'ErrorHandler');
        fs.createWriteStream(`${process.cwd()}/logs/errors.log`, {
            encoding: 'utf8',
            flags: 'a+'
        }).write(`timestamp: ${timestamp} code ${code}, method: ${method}, path: ${path} message: ${message};\n`);
        response.status(status).send(errorResponse);
    }
};
HttpErrorFilter = __decorate([
    common_1.Catch()
], HttpErrorFilter);
exports.HttpErrorFilter = HttpErrorFilter;
//# sourceMappingURL=ErrorHandler.interceptor.js.map