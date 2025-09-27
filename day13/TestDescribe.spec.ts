import test from '@playwright/test'

//test.describe -> group of test cases

//test.describe.serial -> to run the test cases in serial manner -> if any one test is failed . it will
//stop the execution of next test cases (depends-on)

//test.describe.parallel -> to run the test cases in parallel manner -> if any one test is failed . it will
//not stop the execution of next test cases

//test.describe.squential(default) -> to run the test cases in sequential manner -> if any one test is failed . it will 
//not stop the execution of next test cases


test.describe("Test Describe Block",()=>{

    test.describe.configure({mode:'default'}) //default, parallel, serial, sequential
test("TestCase 1",async({page}) => {
    await page.goto("https://www.amazon/in")
    console.log(await page.title())
    await page.fill("#twotabsearchtext","iPhone 14 Pro Max")
})

test("TestCase 2",async({page}) => {
    await page.goto("https://www.flipkart.com/")
    console.log(await page.title())
})

test("TestCase 3",async({page}) => {
    await page.goto("https://www.myntra.com/")
    console.log(await page.title())
})


})