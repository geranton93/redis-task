import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    try {
        const app = await NestFactory.create<NestFastifyApplication>(
            AppModule,
            new FastifyAdapter()
        );
        const port = process.env.PORT || 2502;
        const host = process.env.HOST || 'localhost';

        await app.listen(port, host, () => {
            Logger.log(`✅ server started on port: ${port}`, 'main.ts');
        });
    } catch (error) {
        Logger.error(error);
    }
}
bootstrap();
