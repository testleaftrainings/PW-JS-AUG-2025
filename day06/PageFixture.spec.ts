import test, { chromium } from '@playwright/test'

test("Page Fixture Demo",async({page})=>{
await page.goto("https://www.leafground.com/select.xhtml;")

await page.waitForTimeout(5000)
//pagefixture is used to avoid browser,context,page creation and closing

})