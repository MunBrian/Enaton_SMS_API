import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { FeeCategory } from "./feeCategory";
import { FeeStructure } from "./feeStructure";

@Table({
  tableName: "student",
  timestamps: false,
})
export class Student extends Model {
  //   @Column({
  //     primaryKey: true,
  //     type: DataType.UUID,
  //     defaultValue: DataType.UUIDV4,
  //   })
  //   id: any;

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

  @HasOne(() => FeeStructure)
  feeStructure!: ReturnType<() => FeeStructure>;
}
