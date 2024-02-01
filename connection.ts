import { Sequelize } from "sequelize-typescript";

import { VoteHead } from "./models/voteHead";
import { Stream } from "./models/stream";
import { FinancialYear } from "./models/financialYear";
import { FeeCategory } from "./models/feeCategory";
import { SchoolClass } from "./models/schoolClass";
import { FeeStructure } from "./models/feeStructure";
import { Term } from "./models/term";
import { Student } from "./models/student";
import "dotenv/config";

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [
    VoteHead,
    Stream,
    SchoolClass,
    FeeCategory,
    FeeStructure,
    FinancialYear,
    Term,
    Student,
  ],
});

export default connection;
