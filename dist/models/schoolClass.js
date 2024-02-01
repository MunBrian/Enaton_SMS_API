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
exports.SchoolClass = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const stream_1 = require("./stream");
const feeStructure_1 = require("./feeStructure");
let SchoolClass = class SchoolClass extends sequelize_typescript_1.Model {
};
exports.SchoolClass = SchoolClass;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], SchoolClass.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], SchoolClass.prototype, "curriculum", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => stream_1.Stream),
    __metadata("design:type", Array)
], SchoolClass.prototype, "streams", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => feeStructure_1.FeeStructure),
    __metadata("design:type", Array)
], SchoolClass.prototype, "feeStructures", void 0);
exports.SchoolClass = SchoolClass = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "class",
        timestamps: false,
    })
], SchoolClass);
