import { LoginPage } from "./LoginPage";

export class HomePage extends LoginPage{
    
    async clickOnAccounts(){
 await this.sf.click("(//span[text()='Accounts'])[1]")
    }


    async clickOnLeads(){
        await this.sf.click("(//span[text()='Leads'])[1]")
    }
}