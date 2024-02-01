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
import { SchoolClass } from "./schoolClass";
import { FeeStructure } from "./feeStructure";

@Table({
  tableName: "stream",
  timestamps: false,
})
export class Stream extends Model {
  //   @Column({
  //     type: DataType.UUID,
  //     defaultValue: DataType.UUIDV4,
  //     allowNull: false,
  //     primaryKey: true,
  //   })
  //   id: any;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
  })
  population!: number;

  @ForeignKey(() => SchoolClass)
  @Column({
    allowNull: false,
  })
  classId!: number;

  @BelongsTo(() => SchoolClass)
  class!: SchoolClass;

  @HasMany(() => FeeStructure)
  feeStructures!: FeeStructure[];
}
