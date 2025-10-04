import { LoginPage } from "../day14/interitance"

export class HomePage extends LoginPage{

    clickOnCrmsfa(){
        console.log("click on crmsfa link")
    }
}

// let hp=new HomePage()
// hp.loadurl()
// hp.enterUsername()
// hp.enterPassword()
// hp.clickOnLogin()
// hp.clickOnCrmsfa()