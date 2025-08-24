// function add(a,b){
//     return a+b
// }


let sum=(a,b)=>a+b

console.log(sum(2,3))

let brower =()=>{
    console.log("Launching chromebrowser")
    return "Browsername"
}

brower()

let arr=[2,3,4,5,2,6]

let sqarr=arr.map((ele)=>ele*ele)
//ele[0]=2*2
// arr.map(function (ele){
//    ele=ele*ele
// })
console.log(sqarr)

 console.log(arr.filter((even)=>even%2==0))

console.log(arr.reduce((ele)=>ele*ele))
