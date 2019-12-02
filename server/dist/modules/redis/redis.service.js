"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let RedisService = class RedisService {
    constructor(redis) {
        this.redis = redis;
    }
    async getRedisClient() {
        return this.redis;
    }
    async subscribeWithPattern(pattern) {
        try {
            this.redis.psubscribe(pattern);
            return this.redis;
        }
        catch (error) {
            throw error;
        }
    }
    async unsubscribeWithPattern(pattern) {
        try {
            this.redis.punsubscribe(pattern);
            return this.redis;
        }
        catch (error) {
            throw error;
        }
    }
    async executeOnEvent(callback) {
        try {
            return this.redis.on('pmessage', callback);
        }
        catch (error) {
            throw error;
        }
    }
};
RedisService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('REDIS_INSTANCE')),
    __metadata("design:paramtypes", [Object])
], RedisService);
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map