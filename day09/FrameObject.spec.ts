import test from '@playwright/test'

test('Handle the Frame with Frame Object',async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

//const frame1=page.frame({url:"https://www.leafground.com/default.xhtml"})
//await frame1?.locator("#Click").click()

await page.frame({url:"https://www.leafground.com/default.xhtml"})?.locator("#click").click()

await page.waitForTimeout(3000)

//nested frame
//directly we click on the nested frame

await page.frame({name:"frame2"})?.locator("#Click").click()

await page.waitForTimeout(3000)


})