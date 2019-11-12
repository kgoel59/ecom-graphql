import { resolver } from 'graphql-sequelize';
import { Product } from '@models/index';
import to from 'await-to-js';

export const Query = {
    getProduct: resolver(Product, {
        before: async (findOptions, { id }) => {
            findOptions.where = {id};
            return findOptions;
        },
        after: async (product) => {
            return product
        }
    }),
    getProducts: resolver(Product)
};