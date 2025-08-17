let batchName="Playwright_August"  //literal declaration

//object dec
let browserName=new String("Chrome")  //101
let browser=new String("Chrome") //102 unused
browser=new String("Edge")
let browserInfo="Chrome"
let launchBrowser="Chrome"
launchBrowser="edge"

//strict equality -->value and location is compared
console.log(browserName===browser)
console.log(browserInfo===launchBrowser) 
console.log(browserName==browserInfo)

//to get the length of string -->number of characters 
console.log(browserInfo.length)
//to fetch one character from the string 

//chrome --> c-1 ,h=2,r=3,o=4,m=5,e=6
console.log(browserInfo.charAt(2)) //uses of postion of the character to print
//in string -->
console.log(browserInfo.indexOf("o"))  //fetch the index in the character
console.log("Launching the browser "+browserInfo +","+batchName)
console.log(`Launching the browser $ ${browserInfo},${browser}`)
//spliting the data
console.log(browser.split(''))

let message="Happy Learning"
console.log(message.split(" "))
console.log(message.split("a")) //e will be the delimiter to break /split the string

//reverse string 
let cName="Testleaf"
//fealtseT
let length=cName.length
let rev=""
for(let i=length-1;i>=0;i--){
    rev +=cName.charAt(i) //7
    //rev=rev+cName.charAt(i) //f+ charAt(i)  -->f+a -->rev fa -->fa+e
}
console.log(rev)




