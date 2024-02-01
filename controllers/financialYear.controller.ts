import asyncHandler from "express-async-handler";
import { FinancialYear } from "../models/financialYear";

const createFinancialYear = asyncHandler(async (req, res) => {
  //check if body exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }
  //get values from body
  const { start_date, end_date } = req.body;

  //check if required properties exists
  if (!start_date || !end_date) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //create financialYear
  const financialYear: FinancialYear = await FinancialYear.create({
    ...req.body,
  });

  res.status(201).json({
    financialYear,
  });
});

export default createFinancialYear;
