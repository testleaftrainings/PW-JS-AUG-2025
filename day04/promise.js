function orderFood(){
    return new Promise((resolve)=>{
    console.log("Menu selected")
    setTimeout(() => {
        resolve();
    }, 3000);
})
}

function prepareFood(){
   return new Promise((resolve,reject)=>{
 console.log("Chef prepares")
    setTimeout(() => {
      let isPrepared=false
       if(isPrepared){
        resolve();
       } else{
        reject("Preparation is not done")
       }
    }, 2000);
   })       
}

function deliverdFood(){
    return new Promise((resolve)=>{
        console.log("Delivered to table")
        resolve()
    })    
}
//  orderFood().then(()=>prepareFood()).then(()=>deliverdFood())
//          .catch(()=>"issue with order")
//  async await  -->come in pair 


async function dinner(){
   try{
    await orderFood()
    await prepareFood()
    await deliverdFood()
   }catch(error){
    console.log(error)
   }
}
dinner()