import { Router } from "express";
import { resolve } from "path";
import path from 'path'
import { verificaToken } from "../middleware/verificaToken";
let route_homePage = Router()
import jwt from 'jsonwebtoken'

route_homePage.get('/inicio/:token', (req, res)=>{
    try {
        let token = req.params.token
        jwt.verify(token, process.env.JWT_SECRET)
         res.set({
        'Content-type': 'text/html',
        'StatusCode': '200'
       })
       res.sendFile(path.join(__dirname,'../public/homePage.html'))
    } catch (error) {
        res.redirect('/usuario/')
    }
    
})
export { route_homePage }