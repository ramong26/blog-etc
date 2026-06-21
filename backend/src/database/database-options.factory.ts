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
        const databaseUrl = this.configService.get<string>('DATABASE_URL') ?? process.env.DATABASE_URL;
        const isProduction = process.env.NODE_ENV === 'production';

        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not defined');
        }

        return {
            type: 'postgres',
            url: databaseUrl,
            synchronize: !isProduction, // TODO: 나중에 false로 변경
            ssl: isProduction ? { rejectUnauthorized: false } : undefined,
        };
    }
}
