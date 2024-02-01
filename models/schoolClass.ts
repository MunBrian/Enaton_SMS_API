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
import { Stream } from "./stream";
import { FeeStructure } from "./feeStructure";

@Table({
  tableName: "class",
  timestamps: false,
})
export class SchoolClass extends Model {
  //   @Column({
  //     type: DataType.UUID,
  //     defaultValue: DataType.UUIDV4,
  //     allowNull: false,
  //     primaryKey: true,
  //   })
  //   id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  curriculum!: string;

  @HasMany(() => Stream)
  streams!: Stream[];

  @HasMany(() => FeeStructure)
  feeStructures!: FeeStructure[];
}
