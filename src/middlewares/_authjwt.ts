import jwt from 'express-jwt';

export const auth = (encryption: string) => {
    return jwt({
        secret: encryption,
        credentialsRequired: false,
    });
};


