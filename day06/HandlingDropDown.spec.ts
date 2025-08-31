import test, { chromium } from '@playwright/test'

test("DropDown with selectOption",async()=>{

    const browser= await chromium.launch({headless:false,channel:"chrome"})
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.leafground.com/select.xhtml;")

//label -> text value
await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
await page.waitForTimeout(10000)

//index value start from 0
await page.selectOption(".ui-selectonemenu",{index:3})
await page.waitForTimeout(10000)

// await page.selectOption(".ui-selectonemenu",{value:"Cold Call"})

//css -> parent to child ">" parent>child
// const value= page.locator(".ui-selectonemenu>option")
// const ddcount=await value.count()
// console.log("DropDown count is "+ddcount);
// for(let i=0;i<ddcount;i++){
//     const text=await value.nth(i).innerText()
//     console.log(text);
//}
})

test.only("Non select DropDown",async()=>{
const browser= await chromium.launch({headless:false,channel:"chrome"})
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.leafground.com/select.xhtml;")

await page.locator("[id='j_idt87:country_label']").click()
await page.click("[id='j_idt87:country_3']")
await page.waitForTimeout(5000)


//await page.locator("#username").fill("demosalesmanager")
//await page.fill("#username","demosalesmanager")

})