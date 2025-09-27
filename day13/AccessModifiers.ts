//public -> default access modifier(if we dont mention any access modifier it will be public)
//private -> can be accessed only within the class
//protected -> can be accessed within the class and child class

export class LeafTaps{

public username:string="DemoSalesManager"
private password:string="crmsfa"
protected url:string="http://leaftaps.com/opentaps"

public loadurl(){
    console.log("Load the url")
}

private clickOnLogin(){
    console.log("click on login button")    
}

protected clickOnCrmsfa(){
    console.log("click on crmsfa link")
}

public info(){
    console.log(this.password) //private variable access within the class
    this.clickOnLogin()//private method access within the class

}

public prct(){
    this.clickOnCrmsfa() //protected method access within the class
}

}
// let lt=new LeafTaps()
// console.log(lt.username)
// lt.loadurl()
// lt.info()

//console.log(lt.url) // we cannot access protected variable outside the class