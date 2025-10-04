import {commonFixture} from './Customfixture.spec';

commonFixture("click On Applauncher",async({login})=>{
    await login.click("//div[@class='slds-icon-waffle']")

})



commonFixture("click on opportunities",async({login})=>{
    await login.click("(//span[text()='Opportunities'])[1]")
})
