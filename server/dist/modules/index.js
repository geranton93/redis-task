"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_module_1 = require("./config/config.module");
const events_module_1 = require("./events/events.module");
const redis_module_1 = require("./redis/redis.module");
const socket_module_1 = require("./socket/socket.module");
exports.imports = [
    config_module_1.ConfigModule,
    events_module_1.EventsModule,
    redis_module_1.RedisModule,
    socket_module_1.SocketModule
];
//# sourceMappingURL=index.js.map