
//function declaration
function add(a,b){
    return a+b //it the the added value and won't print anything in the console
}

function sub(c,d){
    console.log(c-d)
}

add(4,5)
console.log(add(2,3)) //it prints the add function result
sub(5,1)
//output of function add as an input to sub
sub(add(2,3),3)

//function expression
let browser = function (user){
    //console.log("Anonymous function with expression " +user)
    return user
}

console.log(("vidya"))
console.log(browser("Dinesh"))

//test("",async ()=>{})

