import {test as base } from '@playwright/test';
//{page}-> browser,context,page

//{page}
export const commonFixture=base.extend<{ login: any}>({

// custom fixture -> Login Page
login: async( { page }, use)=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.fill("#username","dilipkumar.rajendran@testleaf.com")
    await page.fill("#password","TestLeaf@2025")
    await page.click("#Login")
    await use(page)

}



})



