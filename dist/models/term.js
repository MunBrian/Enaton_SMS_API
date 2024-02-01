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
exports.Term = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const financialYear_1 = require("./financialYear");
const feeStructure_1 = require("./feeStructure");
let Term = class Term extends sequelize_typescript_1.Model {
};
exports.Term = Term;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Term.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Term.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Term.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => financialYear_1.FinancialYear),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Term.prototype, "financialYearId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => financialYear_1.FinancialYear),
    __metadata("design:type", financialYear_1.FinancialYear)
], Term.prototype, "financialYear", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => feeStructure_1.FeeStructure),
    __metadata("design:type", Array)
], Term.prototype, "feeStructures", void 0);
exports.Term = Term = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "term",
        timestamps: false,
    })
], Term);
