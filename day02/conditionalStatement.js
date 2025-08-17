let num=10
if(num==0){  //true
  console.log("its neutral")
}else if(num>0){//true
    console.log("its positive number")
}else{
    console.log("its negative number")
}


let message=num>0 ?" postive ":"negative"



console.log("=======================")

let browser="edge"
switch(browser){
    case "chrome": //true
         console.log("launch chrome browser")
         break //to stop the execution when the condition satisfied
    case "edge" :
        console.log("launch the edge browser")
         break
    case  "firefox":
        console.log("launch firefox")
          break
    default :
     console.log("launch safari ")
}



