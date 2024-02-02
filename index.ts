import express, { Express } from "express";
import connection from "./db/connection";
import errorHandler from "./middleware/errorHandler";
import createVoteHead from "./controllers/voteHead.controller";
import createFeeCategory from "./controllers/feeCategory.controller";
import createFinancialYear from "./controllers/financialYear.controller";
import createClass from "./controllers/schoolClass.controller";
import createTerm from "./controllers/term.controller";
import createStream from "./controllers/stream.controller";
import createStudent from "./controllers/student.controller";
import createFeeStructure from "./controllers/feeStructure.controller";
import billStudent from "./controllers/billing.controller";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/createVoteHead", createVoteHead);
app.post("/createFinancialYear", createFinancialYear);
app.post("/createFeeCategory", createFeeCategory);
app.post("/createClass", createClass);
app.post("/createTerm", createTerm);
app.post("/createStream", createStream);
app.post("/createStudent", createStudent);
app.post("/createFeeStructure", createFeeStructure);
app.post("/billStudent", billStudent);

app.use(errorHandler);

const start = async (): Promise<void> => {
  try {
    await connection.sync({ alter: true });
    app.listen(8000, () => {
      console.log("Server is running at port 8000.....");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
