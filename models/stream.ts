import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { SchoolClass } from "./schoolClass";
import { Student } from "./student";

@Table({
  tableName: "stream",
  timestamps: false,
})
export class Stream extends Model {
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

  @HasMany(() => Student)
  students!: Student[];
}
