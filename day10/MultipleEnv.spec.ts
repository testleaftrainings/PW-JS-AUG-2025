import test from '@playwright/test'
import dotenv from 'dotenv'

//read Multiple env file
//envfile-> QA,PROD,
let readEnv= process.env.envfile 

dotenv.config({path:`utils/${readEnv}.env`})

test(`login with Multiple Env`,async({page})=>{
    let username= process.env.LT_UserName as string
    let password= process.env.LT_Password as string 
    console.log(username)
     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username",username)
     await page.fill("#password",password)
     await page.click(".decorativeSubmit")
     
    })

    //set the envfile
    //$env:envfile="QA" 

    //unset the envfile
    //$env:envfile=""