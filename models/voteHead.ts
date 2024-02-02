import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { FeeStructure } from "./feeStructure";

@Table({
  tableName: "voteHead",
})
export class VoteHead extends Model {
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
