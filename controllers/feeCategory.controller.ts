import asyncHandler from "express-async-handler";
import { FeeCategory } from "../models/feeCategory";

const createFeeCategory = asyncHandler(async (req, res) => {
  //check if body exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }
  //get value from body
  const { name } = req.body;

  //check if required property exists
  if (!name) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //create feeCategory
  const feeCategory: FeeCategory = await FeeCategory.create({ ...req.body });

  res.status(201).json({
    feeCategory,
  });
});

export default createFeeCategory;
