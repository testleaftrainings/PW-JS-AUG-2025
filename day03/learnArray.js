let empName=["Aunp","Keerthana","Manikandan"]
//variablename=[values]

let browser=["Chrome",133.56,true,"Edge"]

//array-->zero based indexed
console.log(browser[0])
console.log(browser.length)
console.log(browser[4])
browser[5]="Firefox"
console.log(browser.length)
console.log(browser[4])
console.log(browser[5])
browser[2]="Chromium"
console.log(browser)
//output :[ 'Chrome', 133.56, 'Chromium', 'Edge', <1 empty item>, 'Firefox' ]
//add and remove ele in the array

//push, unshift ,pop and shift
//push and unshift will add data at the end and start of the array 
browser.push(145)// adds the data at the end of the array
console.log(browser) 
browser.unshift("Webkit")
console.log(browser) //adds at the start
//remove data -->pop and shift will removes end and start of the array
browser.pop()
console.log(browser)
browser.shift()
console.log(browser)


//remove any element in between 

browser.splice(2,2,"BrowserVersion",123)  //remove the element in between  -->index , how many element, insert the element 
console.log(browser)

browser.splice(2,1)
console.log(browser)

//splice(startindextobedlete, countofelementstobedeleted,elements to be inserted)
 //startindex -->1 -->all the elements will be delted from the staart index
 //startindex and countof elements -->1,3 -->elements will be removed from 1st index to 1,2,3rd indexed data will be removed
 //startindextobedlete, countofelementstobedeleted,elements to be inserted 
    // -->1,3,"Browserdetails" -->elements will be removed from 1st index to 1,2,3rd indexed data will be removed, inserts the data at the first index

let arr=[2,3,4,5,6]
for(let ele of arr){
    console.log("type the data in the application " +ele)
}
empName.forEach(emp => {
    console.log(emp)
});
//nestedloop

for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
    console.log("Comparingdata")
    for(let j=i+1;j<=arr.length-1;j++){
        console.log(arr[j])
    }

}


