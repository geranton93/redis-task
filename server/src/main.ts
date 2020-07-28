import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

import createLogFolder from './utils/createLogFolder.util';

async function bootstrap(): Promise<void> {
    try {
        const app = await NestFactory.create<NestFastifyApplication>(
            AppModule,
            new FastifyAdapter()
        );

        const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 2502;
        const host = process.env.HOST || 'localhost';

        app.enableCors();

        await app.listen(port, host, (): void => {
            Logger.log(`✅ server started on port: ${port} host: ${host}`, 'main.ts');
        });

        await createLogFolder();
    } catch (error) {
        Logger.error(error.name, error.stack, error.message);
    }
}
bootstrap();
