import test, { chromium } from '@playwright/test'

test("Multiple browser",async()=>{

    const browser= await chromium.launch({channel:'chrome'})
    const context1= await browser.newContext()
    const context2= await browser.newContext()

    const page1=await context1.newPage()
    await page1.goto("https://www.google.com")
    await page1.waitForLoadState("load")
        console.log(await page1.title())

    await page1.waitForTimeout(2000)

    const page2= await context2.newPage()
    await page2.goto("https://www.amazon.com")
        console.log(await page2.title())
    await page2.waitForTimeout(2000)



})
test("Multiple context in same browser",async()=>{

    const browser= await chromium.launch({channel:'chrome'})
    const context1= await browser.newContext()
    const page1=await context1.newPage()
    await page1.goto("https://www.google.com")
    await page1.waitForLoadState("domcontentloaded")
        console.log(await page1.title())

    await page1.waitForTimeout(2000)

    const page2= await context1.newPage()
    await page2.goto("https://www.amazon.com")
        console.log(await page2.title())
    await page2.waitForTimeout(2000)
})

test('Handle the single window',async({page,context})=>{

await page.goto("https://www.amazon.in/")
const data=  page.locator("#twotabsearchtextbox")
await data.fill("phone")
await data.press('Enter')
//Envent Listener -> promise

//step1 -> create promise
//step2-> do action 
//step3 -> reslove the promise(it will child page)
//access the child page

//create promise
const createPromise= context.waitForEvent('page')

//do action
page.locator(`//span[contains(text(),'Lava Bold')]`).first().click()

//resolve the promise -> access event under childpage
const childpage= await createPromise

await page.waitForTimeout(5000)
console.log(await childpage.title())

//  const price= await childpage.locator("//span[@class='aok-offscreen']").first().innerText()
//  console.log(`${price} price of the phone`)
//if close the childpage -> where will be the focus

await childpage.close()
//if focus come the parent page -> it should click on the mobiles
await page.locator("//a[text()='Mobiles']").click()

await page.waitForTimeout(5000)

})

test.only("Handle Multiple Windows",async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")

//create promise -> do the action -> resolve the promise
//multiple context -> store value in opening window in []
//promise.all()

const [multipleWindow]=await Promise.all([

    context.waitForEvent('page'),
    page.locator("//span[text()='Open Multiple']").click()

])
//[window -parent , webtable & dashboard is child]
//[w1,c1,c2,c3.....]
//get length of the
const countPages=multipleWindow.context().pages()
console.log(countPages.length)

//dashboard -> mail id
let dashBroad:any
let webTable:any
for(let i=0;i<countPages.length;i++){

    await page.waitForTimeout(3000)
    const title=await countPages[i].title()
    console.log(title)

    if(title==='Dashboard'){
        //resolve promise -> child page is dashboard
        dashBroad=countPages[i]
    }
    // else if(title==='Web Table'){
    //    webTable=countPages[i]
    // }
}
await dashBroad.locator("#email").fill("dilip@testleaf")

//await page.bringToFront() //without closing window you can access in parent window 

})
