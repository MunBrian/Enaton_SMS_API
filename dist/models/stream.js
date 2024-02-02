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
exports.Stream = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const schoolClass_1 = require("./schoolClass");
const feeStructure_1 = require("./feeStructure");
const student_1 = require("./student");
let Stream = class Stream extends sequelize_typescript_1.Model {
};
exports.Stream = Stream;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Stream.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Stream.prototype, "population", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => schoolClass_1.SchoolClass),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Stream.prototype, "classId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => schoolClass_1.SchoolClass),
    __metadata("design:type", schoolClass_1.SchoolClass)
], Stream.prototype, "class", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => feeStructure_1.FeeStructure),
    __metadata("design:type", Array)
], Stream.prototype, "feeStructures", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => student_1.Student),
    __metadata("design:type", Array)
], Stream.prototype, "students", void 0);
exports.Stream = Stream = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "stream",
        timestamps: false,
    })
], Stream);
