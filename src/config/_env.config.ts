import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '4000',

    JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'secureKey',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '12h',
};