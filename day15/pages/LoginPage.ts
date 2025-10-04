import { PlaywrightWrapper } from "../../Methods/WrapperMethods";

export class LoginPage extends PlaywrightWrapper{


async loadURL(url:string){
    await this.page.goto(url)
}

async loginData(username:string,password:string){
    await this.Typetext("#username",username)
    await this.Typetext("#password",password)
}

async clickLogin(){
    await this.clickElement(".decorativeSubmit")
}


















}