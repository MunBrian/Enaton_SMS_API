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
const student_1 = require("../models/student");
const feeStructure_1 = require("../models/feeStructure");
const billStudent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const student = yield student_1.Student.findOne({
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
    const feeStructure = yield feeStructure_1.FeeStructure.findOne({
        where: {
            feeCategoryId: student.feeCategoryId,
        },
    });
    //check if fee structure is available
    if (feeStructure) {
        res.status(201).json({
            feesAmount: feeStructure.amount,
        });
    }
    else {
        res.status(400);
        throw new Error("FeeStructure does not exist in the system");
    }
}));
exports.default = billStudent;
