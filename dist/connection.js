"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const voteHead_1 = require("./models/voteHead");
const stream_1 = require("./models/stream");
const financialYear_1 = require("./models/financialYear");
const feeCategory_1 = require("./models/feeCategory");
const schoolClass_1 = require("./models/schoolClass");
const feeStructure_1 = require("./models/feeStructure");
const term_1 = require("./models/term");
const student_1 = require("./models/student");
require("dotenv/config");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    models: [
        voteHead_1.VoteHead,
        stream_1.Stream,
        schoolClass_1.SchoolClass,
        feeCategory_1.FeeCategory,
        feeStructure_1.FeeStructure,
        financialYear_1.FinancialYear,
        term_1.Term,
        student_1.Student,
    ],
});
exports.default = connection;
