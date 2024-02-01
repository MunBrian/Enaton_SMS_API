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
const voteHead_1 = require("../models/voteHead");
const createVoteHead = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const voteHead = yield voteHead_1.VoteHead.create(Object.assign({}, req.body));
    res.status(201).json({
        voteHead,
    });
}));
exports.default = createVoteHead;
