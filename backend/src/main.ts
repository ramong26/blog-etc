import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const getCorsOrigins = () => {
    const origins = process.env.CORS_ORIGINS ?? 'http://localhost:3000';

    return origins
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);
};

async function bootstrap() {
    const bootLogger = new Logger('Bootstrap NestJS');

    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: getCorsOrigins(),
    });

    await app.listen(process.env.PORT ?? 8000);

    bootLogger.log(`Server is running on port ${process.env.PORT ?? 8000}`);
}
bootstrap();
