import { Router } from "express";
import path from 'path'
let route_loginPage = Router()
route_loginPage.get('/usuario', (req, res) =>{
    res.set({
        'Content-type': 'text/html',
        'StatusCode': '200'
       })
       res.sendFile(path.join(__dirname,'../public/login_user.html'))
})
export {route_loginPage}