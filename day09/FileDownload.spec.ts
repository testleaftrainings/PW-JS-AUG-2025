import test from '@playwright/test'

//file download -> Event 

test('File Downalod',async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")

//Create promise
const fd= page.waitForEvent('download')

await page.locator("//span[text()='Download']").click()

const download= await fd

//set path where file should be download
//SaveAs
await download.saveAs("download/"+download.suggestedFilename())

})