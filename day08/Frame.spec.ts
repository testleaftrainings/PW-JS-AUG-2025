import test from '@playwright/test'

test("Handle frame with  index Value",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
//count of frames
const frameCount=page.frames()

console.log("Frame count is "+frameCount.length);

//main page also considered as frame  -> index 0
//first frame -> index 1
//second frame -> index 2       
//third frame -> index 3
//fourth frame -> index 4

const Frame=frameCount[1]
console.log("Before handle frame: "+await Frame.locator("#Click").innerText());
await Frame.locator("#Click").click()
console.log("After handle frame: "+await Frame.locator("#Click").innerText());


//nested frame
const nestFrame=frameCount[4]
await nestFrame.locator("#Click").click()
await page.waitForTimeout(5000)

})