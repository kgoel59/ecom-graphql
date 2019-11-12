import { Query } from './product.query';
import { ProductMap } from "./product.map";
import { Mutation } from "./product.mutation";

export const resolver = {
  Query: Query,
  Product: ProductMap,
  Mutation: Mutation,
};
