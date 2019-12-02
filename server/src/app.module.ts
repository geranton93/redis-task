import { Module } from '@nestjs/common';
import providers from './app.providers';
import { imports } from './modules';

@Module({
    imports,
    providers
})
export class AppModule {}
