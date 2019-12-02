"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const config_service_1 = require("../config/config.service");
exports.redisProvider = {
    provide: 'REDIS_INSTANCE',
    useFactory: async (configService) => {
        const url = configService.get('REDIS_URL');
        return new ioredis_1.default(url);
    },
    inject: [config_service_1.ConfigService]
};
//# sourceMappingURL=redis.provider.js.map