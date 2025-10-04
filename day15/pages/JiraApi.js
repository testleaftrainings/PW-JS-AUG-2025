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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssue = createIssue;
var axios_1 = require("axios");
var endPonit = "https://dilipkumaar2005.atlassian.net/rest/api/2/issue";
var emailId = "dilipkumaar2005@gmail.com";
var apiToken = "ATATT3xFfGF0MemPG9N-9zm8-jymf_7WMURvGThQHWoKLQBMPDg6JIAR5wKRtCTuI8kIu1yepUsC_I0QyedOlS8vKsSMl0argC6Wq4v8OQKGTIuxjw_sazZxGToDFczW1X1NkLmb8p5-TzV8DsM2ocNUcs1AGpBr6FRBRN4J3u2_434EfKpS1CY=3CCBCCC7";
var keyName = "AUG";
function createIssue(Summary, Desceiption) {
    return __awaiter(this, void 0, void 0, function () {
        var issueDetails, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    issueDetails = {
                        "fields": {
                            "project": {
                                "key": keyName
                            },
                            "summary": Summary,
                            "description": Desceiption,
                            "issuetype": {
                                "name": "Epic"
                            },
                        }
                    };
                    return [4 /*yield*/, axios_1.default.post(endPonit, issueDetails, {
                            headers: {
                                "Content-Type": "application/json",
                            },
                            auth: {
                                username: emailId,
                                password: apiToken
                            }
                        })];
                case 1:
                    response = _a.sent();
                    console.log("Status code is " + response.status);
                    return [2 /*return*/];
            }
        });
    });
}
createIssue("Epic from api", "Creating Epic using api");
