import { resolver } from 'graphql-sequelize';
import { User,Product } from '@models/index';


export const Query = {
    getCart: resolver(User, {
        before: async (findOptions, {}, {user}) => {
          findOptions.where = {id: user.id};
          findOptions.include = [{model: Product, through: {attributes: ['quantity']} ,attributes: ['name','price','description']}];
          findOptions.attributes = [];

          return findOptions;
        },
        after: async (cart) => {
          console.log(JSON.stringify(cart,null,4));
          return cart;
        }
    })
};