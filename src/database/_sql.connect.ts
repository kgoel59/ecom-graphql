import { Sequelize } from 'sequelize-typescript';
import path from 'path';

export interface IDB {
    HOST: string;
    PORT: number;
    NAME: string;
    USER: string;
    PASS: string;
}

export const sqlConnect = (DB: IDB) => {
    const database = new Sequelize(DB.NAME, DB.USER, DB.PASS, {
        host: DB.HOST,
        database: DB.NAME,
        port: DB.PORT,
        dialect: 'mysql',
        username: DB.NAME,
        password: DB.PASS,
        logging: false,
        storage: ':memory:',
        modelPaths: [path.join(__dirname,'../models/*.model.ts')],
        modelMatch: (filename, member) => {
           return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
        },
    });

    return database;
};
