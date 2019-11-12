import { resolver as rs } from 'graphql-sequelize';
import { Product, Cart } from '@models/index';
import to from 'await-to-js';


export const Mutation = {
  createProduct: rs(Product, {
    before: async (findOptions, { data }) => {
      let err; let product;
      [err, product] = await to(Product.create(data));
      if (err) {
        throw err;
      }
      findOptions.where = { id: product.id };
      return findOptions;
    },
    after: (product) => {
      return product;
    },
  }),
  updateProduct: rs(Product, {
    before: async (findOptions, { id, data }) => {
      let err; let product;
      [err, product] = await to(Product.update(data,{where:{id}}));
      if(err) {
        throw err;
      }
      findOptions.where = {id}
      return findOptions;
    },
    after: async (product) => {
      return product;
    }
  }),
  addToCart: rs(Product, {
    before: async (findOptions, {id,quantity}, {user}) => {
      let err; let product;
      [err, product] = await to(Product.findOne({where:{id}}));
      if(err) {
        throw err;
      }

      quantity = quantity || 1;

      if(product != null && (product.quantity - quantity) > 0) {
        let cart;
        [err,cart] = await to(Cart.findOne({where: {userId: user.id, productId: product.id}}));

        if(err) {
          throw err;
        } else {
          if(cart != null) {
            [err,cart] = await to(Cart.update({quantity: (cart.quantity + quantity)},{where: {id: cart.id}}))
          } else {
            [err,cart] = await to(Cart.create({userId: user.id, productId: product.id, quantity: quantity}));
          }

          if(err) {
            throw err;
          }

          [err, product] = await to(Product.update({quantity: (product.quantity - quantity)},{where: {id: product.id}}));
          if(err) {
            throw err;
          }
        }
      }
      findOptions.where = {id}
      return findOptions;
    },
    after: async (product) => {
      return product;
    }
  })
};