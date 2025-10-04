var ReuseableMethods = /** @class */ (function () {
    function ReuseableMethods() {
    }
    ReuseableMethods.prototype.ElementClick = function (locator, action) {
        if (action == true) {
            console.log("Action Performed :" + locator);
        }
        else {
            console.log("Locator clicked :" + locator);
        }
    };
    return ReuseableMethods;
}());
var mol = new ReuseableMethods();
mol.ElementClick('#username');
