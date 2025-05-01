"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing normal export - needs to pass required things inside {}
const export_1 = require("../export/export");
// importing default export - no need to add {}
const export_2 = __importDefault(require("../export/export"));
(0, export_1.greet)("Rahul");
(0, export_1.shoutOut)('15');
(0, export_2.default)(20);
