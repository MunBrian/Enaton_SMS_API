import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { Student } from "../models/student";
import { FeeStructure } from "../models/feeStructure";

const billStudent = asyncHandler(async (req: Request, res: Response) => {
  //check if bosy exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  //get student name, class, fee_category
  const { student_name } = req.body;

  //check if student name is null
  if (!student_name) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  //get student
  const student = await Student.findOne({
    where: {
      name: student_name,
    },
  });

  //check if student exists
  if (!student) {
    res.status(400);
    throw new Error("student does not exist in the system");
  }

  //get feeStructure based on student's fee Category
  const feeStructure = await FeeStructure.findOne({
    where: {
      feeCategoryId: student.feeCategoryId,
    },
  });

  //check if fee structure is available
  if (feeStructure) {
    res.status(201).json({
      feesAmount: feeStructure.amount,
    });
  } else {
    res.status(400);
    throw new Error("FeeStructure does not exist in the system");
  }
});

export default billStudent;
