import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Student } from "../models/student";
import { FeeCategory } from "../models/feeCategory";

const createStudent = asyncHandler(async (req: Request, res: Response) => {
  //check if body is not null
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  //get values from body
  const { name, fee_category, stream } = req.body;

  //check if name and fee_category are not null
  if (!name || !fee_category) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  //get fee_category
  const feeCategory = await FeeCategory.findOne({
    where: {
      name: fee_category,
    },
  });

  //check if fee category exists
  if (!feeCategory) {
    res.status(400);
    throw new Error("Fee category does not exist.");
  }

  //create student
  const student = await Student.create({
    ...req.body,
    feeCategoryId: feeCategory.id,
  });

  res.status(201).json({
    student,
  });
});

export default createStudent;
