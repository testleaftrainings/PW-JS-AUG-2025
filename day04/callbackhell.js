function orderFood(callback){
    console.log("Menu selected")
    setTimeout(() => {
        callback()
    }, 3000);
    
}

function prepareFood(preparation){
    console.log("Chef prepares")
    setTimeout(() => {
        preparation()
    }, 2000);
    
}

function deliverdFood(){
    console.log("Delivered to table")
}

//chain of callback -->trying to bring sync exe of async behaviour
orderFood(()=>prepareFood(()=>deliverdFood()))
//callback hell (doom of pyramid)
// prepareFood()
// deliverdFood()