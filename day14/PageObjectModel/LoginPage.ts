import{Page} from "@playwright/test";

export class LoginPage{

sf:Page //empty user defined variable which is type page{pw}
//variable:Interface

constructor(sf:Page){
    this.sf=sf
}

 async loadUrl(){
   await  this.sf.goto("https://login.salesforce.com/?locale=in")
}

async loginInfo(username:string,password:string){
await this.sf.fill("#username",username)
await this.sf.fill("#password",password)
}

async clickLogin(){
    await this.sf.click("#Login")

}

}