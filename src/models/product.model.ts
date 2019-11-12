import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { User,Cart } from '@models/index'

@Table({timestamps: true})
export class Product extends Model<Product> {

  @Column({primaryKey: true, autoIncrement: true})
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column
  description: string;

  @Column
  quantity: number;

  @BelongsToMany(()=>User,()=>Cart)
  users: User[]
}