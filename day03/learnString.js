//reverse string 
let cName="Testleaf"
// //fealtseT
// let length=cName.length
// let rev=""
// for(let i=length-1;i>=0;i--){
//     rev +=cName.charAt(i) //7
//     //rev=rev+cName.charAt(i) //f+ charAt(i)  -->f+a -->rev fa -->fa+e
// }console.log(rev)

// rev -->f
//string -->splitted into letters and reversed  

//other way to reverse string using inbuilt methods
let reversedWord=cName.split('').reverse()
console.log(reversedWord)

// cName.split('') --> [T,e,s,t,l,e,a,f] 
//                       -->reversed -->reverse() -->[f,a,e,l,t,s,e,T]
//                                                        -->join("")-->faeltesT



