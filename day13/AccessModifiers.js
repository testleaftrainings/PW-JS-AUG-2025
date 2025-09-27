"use strict";
//public -> default access modifier(if we dont mention any access modifier it will be public)
//private -> can be accessed only within the class
//protected -> can be accessed within the class and child class
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafTaps = void 0;
var LeafTaps = /** @class */ (function () {
    function LeafTaps() {
        this.username = "DemoSalesManager";
        this.password = "crmsfa";
        this.url = "http://leaftaps.com/opentaps";
    }
    LeafTaps.prototype.loadurl = function () {
        console.log("Load the url");
    };
    LeafTaps.prototype.clickOnLogin = function () {
        console.log("click on login button");
    };
    LeafTaps.prototype.clickOnCrmsfa = function () {
        console.log("click on crmsfa link");
    };
    LeafTaps.prototype.info = function () {
        console.log(this.password); //private variable access within the class
        this.clickOnLogin(); //private method access within the class
    };
    LeafTaps.prototype.prct = function () {
        this.clickOnCrmsfa(); //protected method access within the class
    };
    return LeafTaps;
}());
exports.LeafTaps = LeafTaps;
// let lt=new LeafTaps()
// console.log(lt.username)
// lt.loadurl()
// lt.info()
//console.log(lt.url) // we cannot access protected variable outside the class
