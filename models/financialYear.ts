import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

import { Term } from "./term";

@Table({
  tableName: "financialYear",
  timestamps: false,
})
export class FinancialYear extends Model {
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

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  start_date!: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  end_date!: string;

  @HasMany(() => Term)
  terms!: Term[];
}
