import test from '@playwright/test'

test("Playwright Locators",async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    //getByText
    await page.getByText("Admin Page").click()
    await page.waitForTimeout(5000)

    //getByRole
    await page.getByRole('link',{name:'Forgot login info?'}).click()
    await page.waitForTimeout(5000)

    //getByAltText
    await page.getByAltText("ParaBank").click()
    await page.waitForTimeout(5000)

    await page.getByText("Locations").first().click()
    await page.waitForTimeout(5000)

    //nth(3)
    await page.getByPlaceholder("Search").click()

    //getByLabel -> under label tag 
    await page.getByLabel("username").fill("Demosalesmanager")

    //getByTitle
    await page.getByTitle("Qualified Messenger").click()

})