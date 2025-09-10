
//type alias ->create custom type of data

import { get } from "http"

//syntax type typeName=definition
type apiStatus=number|string
let stat:apiStatus="No Content"
//stat=204
console.log(stat)

let browser:string|null|boolean|number
browser='Edge'
browser=45
console.log(browser)


//Intersection(&) -> never
// let user:string&number
// user="admin"
// user=45

type admin={
    adminId?:string
    adminPassword?:string
}
type user={
    userId:number
    userPassword:string
}
type db=admin&user
let login:db={
userId:1234,
userPassword:'test@123',
}
console.log(login)

//optional(?) =value may or may not be present
//adminId and adminPassword are optional
//adminId? ,adminPassword?


function getUser(userName:string,UserId:number,stauts?:boolean){

    console.log(`User name is ${userName} and user id is ${UserId} and status is ${stauts}`)
}

getUser("Dilip",37)
getUser("Dilip",37,true)