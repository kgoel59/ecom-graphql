import { Query } from './cart.query';
import { ProductMap } from "./cart.map";
import { Mutation } from "./cart.mutation";

export const resolver = {
  Query: Query,
  Product: ProductMap,
  Mutation: Mutation,
};
