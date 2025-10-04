import { HomePage } from "../day14/HomePageInhert";

class MyHomePageInhert extends HomePage{

    clickOnLeads(){
        console.log("click on leads link")
    }

    public enterUsername(){
        //use parent class method or property using super keyword
        super.enterUsername()
    }


    enterPassword() {
        console.log("Enter the password - child class")
    }

}

let myHp=new MyHomePageInhert()
myHp.loadurl()
myHp.enterUsername()
myHp.enterPassword()
myHp.clickOnLogin()
myHp.clickOnCrmsfa()
myHp.clickOnLeads()


