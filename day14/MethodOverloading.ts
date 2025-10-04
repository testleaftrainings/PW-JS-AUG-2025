class ReuseableMethods{

ElementClick(locator:string):void
ElementClick(locator:string,action:boolean):void

//implementation
ElementClick(locator:string,action?:boolean){
if(action==true){
    console.log("Action Performed :"+locator) //2nd method
}else{
    console.log("Locator clicked :"+locator) //1st method
}
}
}

let mol=new ReuseableMethods()
mol.ElementClick('#username')
mol.ElementClick("#password",true)