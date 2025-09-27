import test from '@playwright/test'

test("Test Annotation",async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
})

// test.only("Test Annotation Only",async({page}) => {
//     await page.goto("https://www.facebook.com/")
// })

test.skip("Test Annotation Skip",async({page}) => {
    await page.goto("https://www.instagram.com/")
})

test.fail("Test Annotation Fail",async({page})=>{
    await page.goto("https://www.gmail.com")
    await page.locator("#username").fill("Dilip")
})


test("Test Annotattion Fixme",async({page})=>{
    test.fixme(true,"Loctor not found issue")
    await page.goto("https://www.redbus.in/")
    await page.locator("#src").fill("Chennai")
    
})

test.fixme("Test Annotation Fixme at suite level",async({page})=>{
    await page.goto("https://www.redbus.in/")
    await page.locator("#src").fill("Chennai")})


test("Test Annotation Info",async({page})=>{

    test.info().annotations.push({type:'bug',description:'Locator not found issue'},
        {type:'Author',description:'Dilip Kumar'},{type:'Smoke'}
    )
    await page.goto("http://leaftaps.com/opentaps/control/main")
})

