abstract class  Methods{

    //0 to 100% abstract methods
//both Implemented and unimplemented methods
type(){
    console.log("Enter your name")
}

abstract click():void //-> abstract method

}

//let obj=new Methods() //-> we can't create object of abstract class

class Login extends Methods{
    click() //-> abstract method
    {
       console.log("click on login button")
    }

}

let obj=new Login()
obj.click()
obj.type()