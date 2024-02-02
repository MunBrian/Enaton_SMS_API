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
exports.Student = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const feeCategory_1 = require("./feeCategory");
const stream_1 = require("./stream");
let Student = class Student extends sequelize_typescript_1.Model {
    static increasePopulation(student) {
        return stream_1.Stream.findByPk(student.streamId)
            .then((stream) => {
            if (stream) {
                stream.population++;
                return stream.save();
            }
            else {
                // Handle the case where the stream doesn't exist
                console.log("Stream doesn't exist");
            }
        })
            .catch((error) => {
            // Handle errors gracefully
            console.log(error);
        });
    }
};
exports.Student = Student;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => feeCategory_1.FeeCategory),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Student.prototype, "feeCategoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => feeCategory_1.FeeCategory),
    __metadata("design:type", feeCategory_1.FeeCategory)
], Student.prototype, "feecategory", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => stream_1.Stream),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Student.prototype, "streamId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => stream_1.Stream),
    __metadata("design:type", stream_1.Stream)
], Student.prototype, "stream", void 0);
__decorate([
    sequelize_typescript_1.AfterCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Student]),
    __metadata("design:returntype", void 0)
], Student, "increasePopulation", null);
exports.Student = Student = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "student",
        timestamps: false,
    })
], Student);
