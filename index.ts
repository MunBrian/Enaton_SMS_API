import express, { Express, Request, Response } from "express";
import connection from "./db/connection";
import errorHandler from "./middleware/errorHandler";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express using tsx");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello there with nodemon");
});

app.use(errorHandler);

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(8000, () => {
      console.log("Server is running at port 8000.....");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
