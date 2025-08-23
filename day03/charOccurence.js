// let browserName="ChromeBrowser"

// let targetedletter='o'
// let count=0
// let counter=0

function charOccurence(input,targetedchar){
    let count=0
for(let i=0;i<=input.length-1;i++){
    if(input.charAt(i)==targetedchar){
     count++
    }else{
        console.log(input.charAt(i))
    }
}

console.log(`The count of characters ${targetedchar} in ${input} is ${count}`)
}

charOccurence("vijayalakshmi",'a')
