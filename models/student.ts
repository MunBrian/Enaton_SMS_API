import {
  AfterCreate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { FeeCategory } from "./feeCategory";
import { Stream } from "./stream";

@Table({
  tableName: "student",
  timestamps: false,
})
export class Student extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @ForeignKey(() => FeeCategory)
  @Column({
    allowNull: false,
  })
  feeCategoryId!: number;

  @BelongsTo(() => FeeCategory)
  feecategory!: FeeCategory;

  @ForeignKey(() => Stream)
  @Column({
    allowNull: false,
  })
  streamId!: number;

  @BelongsTo(() => Stream)
  stream!: Stream;

  @AfterCreate
  static increasePopulation(student: Student) {
    return Stream.findByPk(student.streamId)
      .then((stream) => {
        if (stream) {
          stream.population++;
          return stream.save();
        } else {
          // Handle the case where the stream doesn't exist
          console.log("Stream doesn't exist");
        }
      })
      .catch((error) => {
        // Handle errors gracefully
        console.log(error);
      });
  }
}
