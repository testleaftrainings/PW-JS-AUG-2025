class Browser{

//properties
browserName:string="Webkit" 
browserType:string

//methods
loadUrl(){
    console.log("Load the url")
}

//constructor
// constructor(){
//     console.log("I am in constructor")
// }

//parameterized constructor
constructor(browserType:string){
    //accsess current class properties and methods using 'this' keyword
console.log(this.browserType=browserType)

}
}
//i want access the class properties and methods
//object creation -> can do ouside the class
//let objectName=new ClassName()
//ClassName() -> constructor
let  b=new Browser("Chrome") // creating object for Browser class
b.loadUrl()
console.log(b.browserName)