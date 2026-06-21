export interface IDatabaseConfig {
    DB_CONNECTION: string;
    DB_HOST: string;
    DB_PORT?: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
    DATABASE_URL?: string;
}
