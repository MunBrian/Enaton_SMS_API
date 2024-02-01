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
exports.Stream = exports.Term = exports.FinancialYear = exports.VoteHead = exports.FeeStructure = exports.Student = exports.FeeCategory = exports.SchoolClass = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let SchoolClass = class SchoolClass extends sequelize_typescript_1.Model {
};
exports.SchoolClass = SchoolClass;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", Object)
], SchoolClass.prototype, "id", void 0);
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
    (0, sequelize_typescript_1.HasMany)(() => Stream),
    __metadata("design:type", Array)
], SchoolClass.prototype, "streams", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => FeeStructure),
    __metadata("design:type", Array)
], SchoolClass.prototype, "feeStructures", void 0);
exports.SchoolClass = SchoolClass = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "class",
        timestamps: false,
    })
], SchoolClass);
let FeeCategory = class FeeCategory extends sequelize_typescript_1.Model {
};
exports.FeeCategory = FeeCategory;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
    }),
    __metadata("design:type", Object)
], FeeCategory.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], FeeCategory.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Student),
    __metadata("design:type", Array)
], FeeCategory.prototype, "students", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => FeeStructure),
    __metadata("design:type", Array)
], FeeCategory.prototype, "feeStructures", void 0);
exports.FeeCategory = FeeCategory = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "feeCategory",
        timestamps: false,
    })
], FeeCategory);
let Student = class Student extends sequelize_typescript_1.Model {
};
exports.Student = Student;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
    }),
    __metadata("design:type", Object)
], Student.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => FeeCategory),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], Student.prototype, "feeCategoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => FeeCategory),
    __metadata("design:type", FeeCategory)
], Student.prototype, "feecategory", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => FeeStructure),
    __metadata("design:type", void 0)
], Student.prototype, "feeStructure", void 0);
exports.Student = Student = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "student",
        timestamps: false,
    })
], Student);
let FeeStructure = class FeeStructure extends sequelize_typescript_1.Model {
};
exports.FeeStructure = FeeStructure;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FeeStructure.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SchoolClass),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "classId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SchoolClass),
    __metadata("design:type", SchoolClass)
], FeeStructure.prototype, "class", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => FeeCategory),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "feeCategoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => FeeCategory),
    __metadata("design:type", FeeCategory)
], FeeStructure.prototype, "feecategory", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Student),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "studentId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Student),
    __metadata("design:type", Student)
], FeeStructure.prototype, "student", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => VoteHead),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "voteHeadId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => VoteHead),
    __metadata("design:type", void 0)
], FeeStructure.prototype, "voteHead", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Stream),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "streamId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Stream),
    __metadata("design:type", void 0)
], FeeStructure.prototype, "stream", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Term),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], FeeStructure.prototype, "termId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Term),
    __metadata("design:type", void 0)
], FeeStructure.prototype, "term", void 0);
exports.FeeStructure = FeeStructure = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "feeStructure",
        timestamps: true,
    })
], FeeStructure);
let VoteHead = class VoteHead extends sequelize_typescript_1.Model {
};
exports.VoteHead = VoteHead;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
    }),
    __metadata("design:type", Object)
], VoteHead.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], VoteHead.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], VoteHead.prototype, "priority", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], VoteHead.prototype, "chargeType", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => FeeStructure),
    __metadata("design:type", Array)
], VoteHead.prototype, "feeStructures", void 0);
exports.VoteHead = VoteHead = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "voteHead",
    })
], VoteHead);
let FinancialYear = class FinancialYear extends sequelize_typescript_1.Model {
};
exports.FinancialYear = FinancialYear;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
    }),
    __metadata("design:type", Object)
], FinancialYear.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: false,
    }),
    __metadata("design:type", String)
], FinancialYear.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: false,
    }),
    __metadata("design:type", String)
], FinancialYear.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Term),
    __metadata("design:type", Array)
], FinancialYear.prototype, "terms", void 0);
exports.FinancialYear = FinancialYear = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "financialYear",
        timestamps: false,
    })
], FinancialYear);
let Term = class Term extends sequelize_typescript_1.Model {
};
exports.Term = Term;
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
    }),
    __metadata("design:type", Object)
], Term.prototype, "id", void 0);
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
    (0, sequelize_typescript_1.ForeignKey)(() => FinancialYear),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], Term.prototype, "financialYearId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => FinancialYear),
    __metadata("design:type", FinancialYear)
], Term.prototype, "financialYear", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => FeeStructure),
    __metadata("design:type", Array)
], Term.prototype, "feeStructures", void 0);
exports.Term = Term = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "term",
        timestamps: false,
    })
], Term);
let Stream = class Stream extends sequelize_typescript_1.Model {
};
exports.Stream = Stream;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    }),
    __metadata("design:type", Object)
], Stream.prototype, "id", void 0);
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
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Stream.prototype, "population", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => SchoolClass),
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", Object)
], Stream.prototype, "classId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => SchoolClass),
    __metadata("design:type", SchoolClass)
], Stream.prototype, "class", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => FeeStructure),
    __metadata("design:type", Array)
], Stream.prototype, "feeStructures", void 0);
exports.Stream = Stream = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "stream",
        timestamps: false,
    })
], Stream);
