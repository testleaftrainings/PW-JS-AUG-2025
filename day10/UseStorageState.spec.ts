import test from '@playwright/test'

test.use({storageState:"utils/LeafTapsLogin.json"})
test("Skip Login ",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.click("//a[text()='Leads']")


})


test.use({storageState:"utils/LeafTapsLogin.json"})
test("Click on Account tap",async({page})=>{
await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.click("//a[text()='Accounts']")
})