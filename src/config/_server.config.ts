import dotenv from 'dotenv';

dotenv.config();

export const SERVER = {
    APP_URL: process.env.SERVER_URL || `http://localhost:3000`,
    API_URL: process.env.API_URL || `http://localhost:4000`
}