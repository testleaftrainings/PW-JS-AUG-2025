
interface actions{
//100% Abstract Methods -> only unimplemented methods

    click():void
    fill():void
    locator():void

}
//for interface we cannot create object

//class to class ->extends
//class to abstract class-> extends
//class to interface -> implements
//abstract class to interface -> implements

class logic implements actions{

    click(){
        console.log("click on login button")
    }

    fill(){
        console.log("fill the data")
    }

    locator() {
        console.log("enter the locator")
    }
}


let inter=new logic()
inter.click()
inter.fill()
inter.locator()