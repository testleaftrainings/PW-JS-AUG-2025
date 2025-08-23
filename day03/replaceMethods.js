let price ="Rs.43,300"
let discountPr=price=price+300
console.log(discountPr)


//43600
//console.log('5'+5)

let comName="Testleaf"
let convertedName=comName.replace('e','$')
console.log(convertedName)
let replaceAll=comName.replaceAll('e','#')
console.log(replaceAll)

//Rs.43,500 --> 43500
//regular expression -->to remove only number, all characters, except character

let pdtPrice="Rs.1900"
let modifiedPrice=pdtPrice.replaceAll(/[^0-9]/g,'')  //except numbers all the characters will be replaced with null
console.log(modifiedPrice)

let replacedString=price.replaceAll(/[a-zA-z]/g,'') //removes all letter only
console.log(replacedString)

//to convert the string to number
let numberPrice=parseInt(modifiedPrice)
console.log(numberPrice+300)

let value= " Learning String methods "
console.log(value)
console.log(value.trim())

console.log(price.concat("samusung"))

let companyNm="Qeagele"
console.log(companyNm.toLowerCase())
console.log(companyNm.toUpperCase())

console.log(companyNm.includes("e"))