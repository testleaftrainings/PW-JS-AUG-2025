import test from '@playwright/test'

//upload file application - 2ways
// way 1-> dom inspect -> tagname -input, attribute - type='file'
//setInputFiles() -> path of the file
//file -> should added in your workspace

test('File upload with Input Tag and Type File',async({page})=>{

    await page.goto("https://www.leafground.com/file.xhtml")
    await page.locator("//span[text()='Choose']/following-sibling::input").first()
    .setInputFiles("utils/testleaf-logo-leaf 1.png")
    await page.waitForTimeout(3000)
})

test.only('File Upload with Event Listeren',async({page})=>{
    //promise -> do action -> resolve
    await page.goto("https://www.leafground.com/file.xhtml")
    //create Promise
    const fileup=page.waitForEvent('filechooser')
    //action
 await page.locator("//span[text()='Choose']/following-sibling::input").first().click()

 //resolve promise
const upload=await fileup

//setFiles
await upload.setFiles("utils/PW-W4-Alert-Frame (1).pdf")

})