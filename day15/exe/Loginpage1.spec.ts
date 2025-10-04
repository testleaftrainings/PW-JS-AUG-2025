import test from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


test("Login Page",async({page})=>{

const lp= new LoginPage(page)

await lp.loadURL("http://leaftaps.com/opentaps/control/main")
await lp.loginData("Demosalesmanager","crmsfa")
await lp.clickLogin()

//democsr , demoCSR2





})