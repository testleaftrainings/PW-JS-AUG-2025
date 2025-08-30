import test,{ chromium } from '@playwright/test'

test('Login Page',async()=>{

    const browser= await chromium.launch({headless:false,channel:'chrome'})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator('#username').fill("DemoSalesManager")
    await page.locator('[name=PASSWORD]').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`text='Leads'`).click()
    //wait for 4 seconds
    await page.waitForTimeout(4000)

   const title =await page.title()
   console.log(title)

   await page.locator("//input[@id='username']").fill("DemoSalesManager")







})