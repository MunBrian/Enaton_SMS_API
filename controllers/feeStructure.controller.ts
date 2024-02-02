import { Response, Request } from "express";
import asyncHandler from "express-async-handler";
import { FeeCategory } from "../models/feeCategory";
import { Stream } from "../models/stream";
import { VoteHead } from "../models/voteHead";
import { Term } from "../models/term";
import { FeeStructure } from "../models/feeStructure";
import { SchoolClass } from "../models/schoolClass";

const createFeeStructure = asyncHandler(async (req: Request, res: Response) => {
  //check if body is null
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const { school_class, stream, vote_head, term, fee_category, amount } =
    req.body;

  if (
    !school_class ||
    !stream ||
    !vote_head ||
    !term ||
    !fee_category ||
    !amount
  ) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  //get class
  const schoolClass = await SchoolClass.findOne({
    where: {
      name: fee_category,
    },
  });

  //check if class exists
  if (!schoolClass) {
    res.status(400);
    throw new Error("Fee category does not exist.");
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

  //get voteHead
  const voteHead = await VoteHead.findOne({
    where: {
      name: vote_head,
    },
  });

  //check if voteHead exists
  if (!voteHead) {
    res.status(400);
    throw new Error("Fee category does not exist.");
  }

  //get term
  const schoolTerm: Term | null = await Term.findOne({
    where: {
      name: term,
    },
  });

  //check if term exists
  if (!schoolTerm) {
    res.status(400);
    throw new Error("Stream does not exist.");
  }

  //create student
  const feeStructure = await FeeStructure.create({
    ...req.body,
    feeCategoryId: feeCategory.id,
    streamId: schoolStream.id,
    classId: schoolClass.id,
    term: schoolTerm.id,
    voteHeadId: voteHead.id,
  });

  res.status(201).json({
    feeStructure,
  });
});
