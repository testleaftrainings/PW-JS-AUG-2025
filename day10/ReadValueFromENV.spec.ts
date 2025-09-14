import test from '@playwright/test'
import dotenv from 'dotenv'

//set path for env file
dotenv.config({path:'utils/QA.env'})

test(`login with Env`,async({page})=>{

    //process.env.variable
    //process-> global object node.js
    //env -> environment variable
    //variable -> LT_UserName
    let username= process.env.LT_UserName as string
    let password= process.env.LT_Password as string 

     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username",username)
     await page.fill("#password",password)
     await page.click(".decorativeSubmit")

     
    })