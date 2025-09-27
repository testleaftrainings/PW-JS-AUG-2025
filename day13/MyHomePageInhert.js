"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HomePageInhert_1 = require("./HomePageInhert");
var MyHomePageInhert = /** @class */ (function (_super) {
    __extends(MyHomePageInhert, _super);
    function MyHomePageInhert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHomePageInhert.prototype.clickOnLeads = function () {
        console.log("click on leads link");
    };
    return MyHomePageInhert;
}(HomePageInhert_1.HomePage));
var myHp = new MyHomePageInhert();
myHp.loadurl();
myHp.enterUsername();
myHp.enterPassword();
myHp.clickOnLogin();
myHp.clickOnCrmsfa();
myHp.clickOnLeads();
