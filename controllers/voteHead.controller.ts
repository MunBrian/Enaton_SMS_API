import asyncHandler from "express-async-handler";
import { VoteHead } from "../models/voteHead";

const createVoteHead = asyncHandler(async (req, res) => {
  //check if body exists
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }
  //get values from body
  const { name, priority, chargeType } = req.body;

  //check if required properties exists
  if (!name || !priority || !chargeType) {
    res.status(400);
    throw new Error("Please fill in all the fields");
  }

  //create voteHead
  const voteHead: VoteHead = await VoteHead.create({ ...req.body });

  res.status(201).json({
    voteHead,
  });
});

export default createVoteHead;
