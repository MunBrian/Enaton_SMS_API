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
const stream_1 = require("../models/stream");
const schoolClass_1 = require("../models/schoolClass");
const createStream = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const schoolClass = yield schoolClass_1.SchoolClass.findOne({
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
    const stream = yield stream_1.Stream.create(Object.assign(Object.assign({}, req.body), { classId: schoolClass.id }));
    res.status(201).json({
        stream,
    });
}));
exports.default = createStream;
