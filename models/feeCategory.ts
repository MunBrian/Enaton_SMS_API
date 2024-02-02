import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

import { FeeStructure } from "./feeStructure";
import { Student } from "./student";

@Table({
  tableName: "feeCategory",
  timestamps: false,
})
export class FeeCategory extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => Student)
  students!: Student[];

  @HasMany(() => FeeStructure)
  feeStructures!: FeeStructure[];
}
