"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_module_1 = require("../config/config.module");
const socket_provider_1 = require("./socket.provider");
const socket_service_1 = require("./socket.service");
let SocketModule = class SocketModule {
};
SocketModule = __decorate([
    common_1.Module({
        imports: [config_module_1.ConfigModule],
        providers: [socket_provider_1.wsProvider, socket_service_1.WsService],
        controllers: [],
        exports: [socket_service_1.WsService]
    })
], SocketModule);
exports.SocketModule = SocketModule;
//# sourceMappingURL=socket.module.js.map