import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "voteHeads",
})
export class VoteHeads extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

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
}
