//playwright to handle the alert -> Auto dismiss the alert
//cancle your  alert

import test from '@playwright/test'
test("Auto dismiss the alert", async ({ page }) => {

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("//span[text()='Show']").nth(1).click()
await page.waitForTimeout(10000)
})

//Event Listner to handle the alert
//page.on-> handel all the alert which present in the test case
//page.once -> handel only one alert which present in the test case(first alert)

test("Handle alert with Page.on Simple alert",async({page})=>{

    //handle first alert present in the test case
    page.once('dialog',alertType=>{
        // type of alert
        const type=alertType.type()
        console.log(type)
        //alert box what message it has 
        console.log(alertType.message())
        //handle alert 
        alertType.accept()
    })
    

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.waitForTimeout(10000)
    // await page.locator("//span[text()='Show']").nth(1).click()
    // await page.waitForTimeout(10000)
})


test("Handle Alert with page.on",async({page})=>{

    page.on('dialog',type=>{
const alertName=type.type()
//alert name=> alert,confirm,prompt
console.log(alertName)
console.log(type.message())

if(alertName==='confirm'){
    //alert===confirm
    //confirm===confirm
    type.accept()
}else{
    type.accept()
}
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    //alert=> simple alert
    await page.waitForTimeout(10000)
    await page.locator("//span[text()='Show']").nth(1).click()
     await page.waitForTimeout(10000)
})

test.only("handle the sweet alert",async({page})=>{
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(2).click()
    await page.waitForTimeout(3000)
    await page.locator("//span[@class='ui-icon ui-icon-closethick']").first().click()
await page.waitForTimeout(10000)
})
