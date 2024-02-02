"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const feeCategory_1 = require("../models/feeCategory");
const voteHead_1 = require("../models/voteHead");
const term_1 = require("../models/term");
const feeStructure_1 = require("../models/feeStructure");
const schoolClass_1 = require("../models/schoolClass");
const createFeeStructure = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    //get class
    const schoolClass = yield schoolClass_1.SchoolClass.findOne({
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
    const feeCategory = yield feeCategory_1.FeeCategory.findOne({
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
    const voteHead = yield voteHead_1.VoteHead.findOne({
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
    const schoolTerm = yield term_1.Term.findOne({
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
    const feeStructure = yield feeStructure_1.FeeStructure.create(Object.assign(Object.assign({}, req.body), { feeCategoryId: feeCategory.id, classId: schoolClass.id, term: schoolTerm.id, voteHeadId: voteHead.id }));
    res.status(201).json({
        feeStructure,
    });
}));
exports.default = createFeeStructure;
