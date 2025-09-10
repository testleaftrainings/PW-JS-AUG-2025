import test from '@playwright/test'

test("Handle frame with FrameLocator",async({page})=>{
await page.goto("https://www.leafground.com/frame.xhtml")
//frame locator
await page.frameLocator("(//iframe)[1]").locator("#Click").click()
await page.waitForTimeout(5000)

//nested frame

//outer frame -> inner frame
await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
//await page.frameLocator("#frame2").locator("#Click").click()
await page.waitForTimeout(5000)
})