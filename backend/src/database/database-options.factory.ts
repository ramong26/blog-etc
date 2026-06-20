import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions, getMetadataArgsStorage } from 'typeorm';
import { IDatabaseConfig } from './interfaces/database-config.interface';

@Injectable()
export class DatabaseOptionsFactory implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService<IDatabaseConfig>) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            ...this.createDataSourceOptions(),
            entities: getMetadataArgsStorage().tables.map((table) => table.target),
        };
    }

    createDataSourceOptions(): DataSourceOptions {
        return {
            type: 'postgres',
            host: this.configService.get('DB_HOST'),
            port: Number(this.configService.get('DB_PORT')),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_DATABASE'),
            synchronize: process.env.NODE_ENV !== 'production',
        };
    }
}
