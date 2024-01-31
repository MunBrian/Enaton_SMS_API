"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const model_1 = require("./models/model");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "mungaiizz254",
    database: "enaton_sms",
    logging: false,
    models: [model_1.VoteHeads],
});
exports.default = connection;
