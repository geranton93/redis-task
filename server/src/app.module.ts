import { Module } from '@nestjs/common';
import providers from './app.providers';
import * as modules from './modules';

@Module({
    imports: Object.values(modules),
    providers
})
export class AppModule {}
