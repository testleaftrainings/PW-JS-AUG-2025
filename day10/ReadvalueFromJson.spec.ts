import test from '@playwright/test'
//read value from Json path
import loginValue from '../../utils/Login.json'

for(let value of loginValue){

    test(`login with json file ${value.TcName}`,async({page})=>{

   //console.log(value.Username)
     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username",value.Username)
     await page.fill("#password",value.Password)
     await page.click(".decorativeSubmit")

    })

}