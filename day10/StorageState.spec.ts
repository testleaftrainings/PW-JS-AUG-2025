//url,username,password,clickOnLogin,crmsfa
import test from '@playwright/test'

test('Storage State',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username","DemoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    await page.getByText("CRM/SFA").click()

    //storage the information
    //under .json format -> store the file
    await page.context().storageState({path:"utils/LeafTapsLogin.json"})

})