import axios from "axios"

let endPonit="https://dilipkumaar2005.atlassian.net/rest/api/2/issue"
let emailId="dilipkumaar2005@gmail.com"
let apiToken="ATATT3xFfGF0MemPG9N-9zm8-jymf_7WMURvGThQHWoKLQBMPDg6JIAR5wKRtCTuI8kIu1yepUsC_I0QyedOlS8vKsSMl0argC6Wq4v8OQKGTIuxjw_sazZxGToDFczW1X1NkLmb8p5-TzV8DsM2ocNUcs1AGpBr6FRBRN4J3u2_434EfKpS1CY=3CCBCCC7"
let keyName="AUG"

export async function createIssue(Summary:string,Desceiption:string){

const issueDetails={

"fields":{

"project":{
    "key":keyName
},
"summary":Summary,
"description":Desceiption,

"issuetype":{
    "name":"Epic"
},
}
}

//api call
const response= await axios.post(endPonit,issueDetails,{
headers:{
    "Content-Type":"application/json",
},
auth:{
    username:emailId,
    password:apiToken
}

})
console.log("Status code is "+response.status)
}


createIssue("Epic from api","Creating Epic using api")


