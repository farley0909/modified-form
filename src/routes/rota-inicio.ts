import { Router } from "express";
import { resolve } from "path";
import path from 'path'
let rota_inicio = Router()

rota_inicio.get('/inicio/:token', (req, res)=>{
    res.set({
        'Content-type': 'text/html',
        'StatusCode': '200'
       })
       res.sendFile(path.join(__dirname,'../public/inicio.html'))
})
export { rota_inicio }