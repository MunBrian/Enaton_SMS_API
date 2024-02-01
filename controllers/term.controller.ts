import asyncHandler from "express-async-handler";
import { Term } from "../models/term";
import { FinancialYear } from "../models/financialYear";

const createTerm = asyncHandler(async (req, res) => {
  //check if body exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //get values from body
  const { name, financial_year, start_date, end_date } = req.body;

  //check if required properties exists
  if (!name || !financial_year || !start_date || !end_date) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //filter and get the financialyear
  const financialYear = await FinancialYear.findOne({
    where: {
      name: financial_year,
    },
  });

  //check if financial year exists
  if (!financialYear) {
    res.status(401);
    throw new Error("Financial year does not exist.");
  }

  //create term, get id from the fetched result and fill financialYearId property
  const term: Term = await Term.create({
    ...req.body,
    financialYearId: financialYear.id,
  });

  res.status(201).json({
    term,
  });
});

export default createTerm;
