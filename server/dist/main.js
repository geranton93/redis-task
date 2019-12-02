"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
        const port = process.env.PORT || 2502;
        const host = process.env.HOST || 'localhost';
        await app.listen(port, host, () => {
            common_1.Logger.log(`✅ server started on port: ${port}`, 'main.ts');
        });
    }
    catch (error) {
        common_1.Logger.error(error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map