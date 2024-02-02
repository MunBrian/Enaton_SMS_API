import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Student } from "../models/student";
import { FeeCategory } from "../models/feeCategory";
import { Stream } from "../models/stream";

const createStudent = asyncHandler(async (req: Request, res: Response) => {
  //check if body is not null
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the required fields");
  }

  //get values from body
  const { name, fee_category, stream } = req.body;

  //check if name, fee_category, and stream are not null
  if (!name || !fee_category || !stream) {
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

  //get stream
  const schoolStream: Stream | null = await Stream.findOne({
    where: {
      name: stream,
    },
  });

  //check if stream exists
  if (!schoolStream) {
    res.status(400);
    throw new Error("Stream does not exist.");
  }

  //create student
  const student = await Student.create({
    ...req.body,
    feeCategoryId: feeCategory.id,
    streamId: schoolStream.id,
  });

  res.status(201).json({
    student,
  });
});

export default createStudent;
