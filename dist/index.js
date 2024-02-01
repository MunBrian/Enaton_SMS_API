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
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./db/connection"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const voteHead_controller_1 = __importDefault(require("./controllers/voteHead.controller"));
const feeCategory_controller_1 = __importDefault(require("./controllers/feeCategory.controller"));
const financialYear_controller_1 = __importDefault(require("./controllers/financialYear.controller"));
const schoolClass_controller_1 = __importDefault(require("./controllers/schoolClass.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.post("/createVoteHead", voteHead_controller_1.default);
app.post("/createFinancialYear", financialYear_controller_1.default);
app.post("/createFeeCategory", feeCategory_controller_1.default);
app.post("/createClass", schoolClass_controller_1.default);
// app.post("/createStudent", createStudent)
// app.post("/createGrade", createGrade)
app.use(errorHandler_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.sync();
        app.listen(8000, () => {
            console.log("Server is running at port 8000.....");
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
start();
