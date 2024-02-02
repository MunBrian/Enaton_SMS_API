import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { FeeCategory } from "./feeCategory";
import { Stream } from "./stream";

@Table({
  tableName: "student",
  timestamps: false,
})
export class Student extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @ForeignKey(() => FeeCategory)
  @Column({
    allowNull: false,
  })
  feeCategoryId!: number;

  @BelongsTo(() => FeeCategory)
  feecategory!: FeeCategory;

  @ForeignKey(() => Stream)
  @Column({
    allowNull: false,
  })
  streamId!: number;

  @BelongsTo(() => Stream)
  stream!: Stream;
}
