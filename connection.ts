import { Sequelize } from "sequelize-typescript";

import { VoteHeads } from "./models/model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "mungaiizz254",
  database: "enaton_sms",
  logging: false,
  models: [VoteHeads],
});

export default connection;
