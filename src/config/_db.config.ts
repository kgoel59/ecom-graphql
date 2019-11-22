import dotenv from 'dotenv';
dotenv.config();


export const DB = {
    DEV: {
        HOST:  `YOUR_DB_HOST`,
        PORT:   1234,
        NAME:  `YOUR_DB_NAME`,
        USER:  `YOUR_DB_USER`,
        PASS:  `YOUR_DB_PASWORD`,
    },
    PRO: {
        HOST: process.env.DB_HOST,
        PORT: parseInt(process.env.DB_PORT),
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASS: process.env.DB_PASS
    }
}