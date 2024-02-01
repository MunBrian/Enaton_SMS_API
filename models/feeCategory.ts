import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
} from "sequelize-typescript";

import { FeeStructure } from "./feeStructure";
import { Student } from "./student";

@Table({
  tableName: "feeCategory",
  timestamps: false,
})
export class FeeCategory extends Model {
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

  @HasMany(() => Student)
  students!: Student[];

  @HasMany(() => FeeStructure)
  feeStructures!: FeeStructure[];
}
