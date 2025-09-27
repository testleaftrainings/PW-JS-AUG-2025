var Browser = /** @class */ (function () {
    //constructor
    // constructor(){
    //     console.log("I am in constructor")
    // }
    //parameterized constructor
    function Browser(browserType) {
        //properties
        this.browserName = "Webkit";
        //accsess current class properties and methods using 'this' keyword
        console.log(this.browserType = browserType);
    }
    //methods
    Browser.prototype.loadUrl = function () {
        console.log("Load the url");
    };
    return Browser;
}());
//i want access the class properties and methods
//object creation -> can do ouside the class
//let objectName=new ClassName()
//ClassName() -> constructor
var b = new Browser("Chrome"); // creating object for Browser class
b.loadUrl();
console.log(b.browserName);
