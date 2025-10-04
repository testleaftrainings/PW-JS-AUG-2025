import test from "@playwright/test";
import { Accounts } from "./CreateAccount";

test("Create Account",async({page})=>{


    const ca=new Accounts(page)
    await ca.loadUrl()
    await ca.loginInfo("dilipkumar.rajendran@testleaf.com","TestLeaf@2025")
    await ca.clickLogin()
    await ca.clickOnAccounts()
    await ca.clickOnNewButton()
    

})