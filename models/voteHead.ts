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

@Table({
  tableName: "voteHead",
})
export class VoteHead extends Model {
  // @Column({
  //   primaryKey: true,
  //   type: DataType.UUID,
  //   defaultValue: DataType.UUIDV4,
  // })
  // id: any;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  priority!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  chargeType!: string;

  @HasMany(() => FeeStructure)
  feeStructures!: FeeStructure[];
}
