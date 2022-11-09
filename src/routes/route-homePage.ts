import { Router } from "express";
import { resolve } from "path";
import path from 'path'
let route_homePage = Router()

route_homePage.get('/inicio/:token', (req, res)=>{
    res.set({
        'Content-type': 'text/html',
        'StatusCode': '200'
       })
       res.sendFile(path.join(__dirname,'../public/homePage.html'))
})
export { route_homePage }