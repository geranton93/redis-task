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
const operators_1 = require("rxjs/operators");
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const timestamp = new Date().toLocaleString();
        const method = request.req.method;
        const path = request.req.url;
        const now = Date.now();
        common_1.Logger.log(`method: ${method}, path: ${path}`, 'LoggingInterceptor');
        fs.createWriteStream(`${process.cwd()}/logs/requests.log`, {
            encoding: 'utf8',
            flags: 'a+'
        }).write(`timestamp: ${timestamp}, method: ${method}, path: ${path}, `);
        return next.handle().pipe(operators_1.tap(() => {
            fs.createWriteStream(`${process.cwd()}/logs/requests.log`, {
                encoding: 'utf8',
                flags: 'a+'
            }).write(`execution time: ${Date.now() - now}ms;\n`);
        }));
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=Logger.interceptor.js.map