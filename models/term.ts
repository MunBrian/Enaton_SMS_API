import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { FinancialYear } from "./financialYear";
import { FeeStructure } from "./feeStructure";

@Table({
  tableName: "term",
  timestamps: false,
})
export class Term extends Model {
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

  @ForeignKey(() => FinancialYear)
  @Column({
    allowNull: false,
  })
  financialYearId!: number;

  @BelongsTo(() => FinancialYear)
  financialYear!: FinancialYear;

  @HasMany(() => FeeStructure)
  feeStructures!: FeeStructure[];
}
