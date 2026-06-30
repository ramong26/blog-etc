import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { DatabaseOptionsFactory } from './database/database-options.factory';
import { HealthModule } from './health/health.module';
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseOptionsFactory,
        }),
        PostsModule,
        HealthModule,
    ],
})
export class AppModule {}
