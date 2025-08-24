import test, { chromium, firefox } from '@playwright/test'
test(`Launching browsers`,async()=>{

    const browser= await chromium.launch({headless:false,channel:'chrome'}) //creates connection with nodejs server of chromium
    const context= await  browser.newContext() //browserwindow -browserContext
    const page=  await context.newPage() //tab opened in the window
    await page.goto("http://www.google.com")

} )


test("Launching firefox browsers",async()=>{

    const browser= await firefox.launch({headless:false}) //creates connection with nodejs server of chromium
    const context= await  browser.newContext() //browserwindow -browserContext
    const page=  await context.newPage() //tab opened in the window
    await page.goto("http://www.google.com")

} )