import test, { expect } from '@playwright/test'

test("Auto Retry Assertion",async({page})=>{

    await page.goto("https://www.leafground.com/input.xhtml")

    //Assertion -> expect
    await expect(page.getByPlaceholder("Babu Manickam")).toBeEnabled()
    //toBeDisabled({timeout:15000})
    console.log("Assertion 1 completed")

    //assertion default timeout is 5 seconds
   // hard assertion

})


test("Soft Assertion",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")
await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:15000})
    console.log("Assertion 1 completed")
await expect(page.getByPlaceholder("Disabled")).toBeDisabled()
console.log("Assertion 2 completed")
    //expect.soft-> assertion will be executed but if it is failed 
    // it will not stop the execution of next lines
})

test.only("Non Retry Assertion",async({page})=>{
    //Leaftaps - TestLeaf Automation Platform
    await page.goto("http://leaftaps.com/opentaps/control/main")
    const actValue= await page.title()
    const expValue="Leaftaps - TestLeaf Automation Platform"

    expect.soft(actValue).toEqual(expValue)
    console.log("soft assertion completed")



})
