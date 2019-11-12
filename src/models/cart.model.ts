import { Table, Column, Model, ForeignKey} from 'sequelize-typescript';
import { User, Product } from '@models/index';

@Table({timestamps: false})
export class Cart extends Model<Cart> {
  @Column({primaryKey: true, autoIncrement: true})
  id: number

  @ForeignKey(() => User)
  @Column({unique: false})
  userId: number;
 
  @ForeignKey(() => Product)
  @Column({unique: false})
  productId: number;

  @Column
  quantity: number;
}