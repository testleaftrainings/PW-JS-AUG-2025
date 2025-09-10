"use strict";
//type alias ->create custom type of data
Object.defineProperty(exports, "__esModule", { value: true });
var stat = "No Content";
//stat=204
console.log(stat);
var browser;
browser = 'Edge';
browser = 45;
console.log(browser);
var login = {
    userId: 1234,
    userPassword: 'test@123',
};
console.log(login);
//optional(?) =value may or may not be present
//adminId and adminPassword are optional
//adminId? ,adminPassword?
function getUser(userName, UserId, stauts) {
    console.log("User name is ".concat(userName, " and user id is ").concat(UserId, " and status is ").concat(stauts));
}
getUser("Dilip", 37);
getUser("Dilip", 37, true);
