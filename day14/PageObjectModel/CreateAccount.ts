import { HomePage } from "./HomePage";

export class Accounts extends HomePage{

    async clickOnNewButton(){
        await this.sf.click("//div[text()='New']")
    }

    
}