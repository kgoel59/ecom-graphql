import dotenv from 'dotenv';
dotenv.config();


export const DB = {
    DEV: {
        HOST: "localhost",
        PORT: 3306,
        NAME: "ecom",
        USER: "root",
        PASS: "mkae12000",
    },
    PRO: {
        HOST: process.env.DB_HOST,
        PORT: parseInt(process.env.DB_PORT),
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASS: process.env.DB_PASS
    }
}