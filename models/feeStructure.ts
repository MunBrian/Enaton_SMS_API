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
import { FeeCategory } from "./feeCategory";
import { Student } from "./student";
import { VoteHead } from "./voteHead";
import { Stream } from "./stream";
import { Term } from "./term";

@Table({
  tableName: "feeStructure",
  timestamps: true,
})
export class FeeStructure extends Model {
  //   @Column({
  //     type: DataType.UUID,
  //     defaultValue: DataType.UUIDV4,
  //     primaryKey: true,
  //     allowNull: false,
  //   })
  //   id: any;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number;

  @ForeignKey(() => SchoolClass)
  @Column({
    allowNull: false,
  })
  classId!: number;

  @BelongsTo(() => SchoolClass)
  class!: SchoolClass;

  @ForeignKey(() => FeeCategory)
  @Column({
    allowNull: false,
  })
  feeCategoryId!: number;

  @BelongsTo(() => FeeCategory)
  feecategory!: FeeCategory;

  @ForeignKey(() => Student)
  @Column({
    allowNull: false,
  })
  studentId!: number;

  @BelongsTo(() => Student)
  student!: Student;

  @ForeignKey(() => VoteHead)
  @Column({
    allowNull: false,
  })
  voteHeadId!: number;

  @BelongsTo(() => VoteHead)
  voteHead!: VoteHead;

  @ForeignKey(() => Stream)
  @Column({
    allowNull: false,
  })
  streamId!: number;

  @BelongsTo(() => Stream)
  stream!: Stream;

  @ForeignKey(() => Term)
  @Column({
    allowNull: false,
  })
  termId!: number;

  @BelongsTo(() => Term)
  term!: Term;
}
