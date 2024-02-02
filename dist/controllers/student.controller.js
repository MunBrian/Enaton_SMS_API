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
const feeCategory_1 = require("../models/feeCategory");
const stream_1 = require("../models/stream");
const createStudent = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    //get stream
    const schoolStream = yield stream_1.Stream.findOne({
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
    const student = yield student_1.Student.create(Object.assign(Object.assign({}, req.body), { feeCategoryId: feeCategory.id, streamId: schoolStream.id }));
    res.status(201).json({
        student,
    });
}));
exports.default = createStudent;
