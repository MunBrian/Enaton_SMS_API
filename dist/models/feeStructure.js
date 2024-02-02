"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeStructure = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const schoolClass_1 = require("./schoolClass");
const feeCategory_1 = require("./feeCategory");
const voteHead_1 = require("./voteHead");
const stream_1 = require("./stream");
const term_1 = require("./term");
let FeeStructure = class FeeStructure extends sequelize_typescript_1.Model {
};
exports.FeeStructure = FeeStructure;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => schoolClass_1.SchoolClass),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "classId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => schoolClass_1.SchoolClass),
    __metadata("design:type", schoolClass_1.SchoolClass)
], FeeStructure.prototype, "class", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => feeCategory_1.FeeCategory),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "feeCategoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => feeCategory_1.FeeCategory),
    __metadata("design:type", feeCategory_1.FeeCategory)
], FeeStructure.prototype, "feecategory", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => voteHead_1.VoteHead),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "voteHeadId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => voteHead_1.VoteHead),
    __metadata("design:type", voteHead_1.VoteHead)
], FeeStructure.prototype, "voteHead", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => stream_1.Stream),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "streamId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => stream_1.Stream),
    __metadata("design:type", stream_1.Stream)
], FeeStructure.prototype, "stream", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => term_1.Term),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "termId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => term_1.Term),
    __metadata("design:type", term_1.Term)
], FeeStructure.prototype, "term", void 0);
exports.FeeStructure = FeeStructure = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "feeStructure",
        timestamps: true,
    })
], FeeStructure);
