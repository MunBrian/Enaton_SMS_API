import asyncHandler from "express-async-handler";
import { Stream } from "../models/stream";
import { SchoolClass } from "../models/schoolClass";

const createStream = asyncHandler(async (req, res) => {
  //check if body exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //get values from body
  const { name, className } = req.body;

  //check if required properties exists
  if (!name || !className) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //filter and get the class
  const schoolClass = await SchoolClass.findOne({
    where: {
      name: className,
    },
  });

  //check if class exists
  if (!schoolClass) {
    res.status(401);
    throw new Error("Financial year does not exist.");
  }

  //create stream, get id from the fetched result and fill schoolClass obj property
  const stream: Stream = await Stream.create({
    ...req.body,
    classId: schoolClass.id,
  });

  res.status(201).json({
    stream,
  });
});

export default createStream;
