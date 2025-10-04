//for interface we cannot create object
//class to class ->extends
//class to abstract class-> extends
//class to interface -> implements
//abstract class to interface -> implements
var logic = /** @class */ (function () {
    function logic() {
    }
    logic.prototype.click = function () {
        console.log("click on login button");
    };
    logic.prototype.fill = function () {
        console.log("fill the data");
    };
    logic.prototype.locator = function () {
        console.log("enter the locator");
    };
    return logic;
}());
var inter = new logic();
inter.click();
inter.fill();
inter.locator();
