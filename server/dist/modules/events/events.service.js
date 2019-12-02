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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const redis_service_1 = require("../redis/redis.service");
const socket_service_1 = require("../socket/socket.service");
let EventsService = class EventsService {
    constructor(redisService, wsService) {
        this.pattern = 'events';
        this.redisService = redisService;
        this.wsService = wsService;
        this.emitEvent();
    }
    async subscribe() {
        try {
            await this.redisService.subscribeWithPattern(this.pattern);
        }
        catch (error) {
            throw error;
        }
    }
    async unsubscribe() {
        try {
            await this.redisService.unsubscribeWithPattern(this.pattern);
        }
        catch (error) {
            throw error;
        }
    }
    async emitEvent() {
        try {
            await this.redisService.executeOnEvent(async (pattern, channel, message) => {
                await this.wsService.emitForUser(this.pattern, message);
            });
        }
        catch (error) {
            throw error;
        }
    }
};
EventsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [redis_service_1.RedisService, socket_service_1.WsService])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map