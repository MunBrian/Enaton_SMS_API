import { Response, Request } from "express";
import asyncHandler from "express-async-handler";
import { FeeCategory } from "../models/feeCategory";
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

  const { school_class, vote_head, term, fee_category, amount } = req.body;

  if (!school_class || !vote_head || !term || !fee_category || !amount) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  console.log(fee_category);

  //get class
  const schoolClass = await SchoolClass.findOne({
    where: {
      name: school_class,
    },
  });

  //check if class exists
  if (!schoolClass) {
    res.status(400);
    throw new Error("Class does not exist.");
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

  //get voteHead
  const voteHead = await VoteHead.findOne({
    where: {
      name: vote_head,
    },
  });

  //check if voteHead exists
  if (!voteHead) {
    res.status(400);
    throw new Error("voteHead does not exist.");
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
    throw new Error("Term does not exist.");
  }

  //create student
  const feeStructure = await FeeStructure.create({
    ...req.body,
    feeCategoryId: feeCategory.id,
    classId: schoolClass.id,
    termId: schoolTerm.id,
    voteHeadId: voteHead.id,
  });

  res.status(201).json({
    feeStructure,
  });
});

export default createFeeStructure;
