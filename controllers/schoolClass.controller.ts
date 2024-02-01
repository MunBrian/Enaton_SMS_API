import asyncHandler from "express-async-handler";
import { SchoolClass } from "../models/schoolClass";

const createClass = asyncHandler(async (req, res) => {
  //check if body exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }
  //get values from body
  const { name, curriculum } = req.body;

  //check if required properties exists
  if (!name || !curriculum) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //create financialYear
  const schoolClass: SchoolClass = await SchoolClass.create({
    ...req.body,
  });

  res.status(201).json({
    schoolClass,
  });
});

export default createClass;
