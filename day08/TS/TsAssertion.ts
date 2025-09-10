let phonePrice:number
phonePrice=25000
// type 1 -> phonePrice as number
// type 2 -><number>phonePrice

const amt=phonePrice as number
console.log(amt)

const amt1=<number>phonePrice
console.log(amt1)

