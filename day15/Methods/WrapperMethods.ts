import { Page } from "playwright";
export abstract class PlaywrightWrapper {

    page:Page

constructor(page:Page){
    this.page=page
}


async Typetext(locator:string,data:string){

    const ele= this.page.locator(locator)
    await ele.fill(data)
}

async clearandType(locator:string,data:string){

    const val= this.page.locator(locator)
    await val.clear()
    await val.fill(data)

}


async clickElement(locator:string){
    const ele= this.page.locator(locator)
    await ele.click()
}







}