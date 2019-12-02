"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const io = __importStar(require("socket.io"));
const config_service_1 = require("../config/config.service");
exports.wsProvider = {
    provide: 'WEBSOCKET_SERVER',
    useFactory: async (configService) => {
        const port = configService.get('WS_PORT');
        return io.listen(port);
    },
    inject: [config_service_1.ConfigService]
};
//# sourceMappingURL=socket.provider.js.map