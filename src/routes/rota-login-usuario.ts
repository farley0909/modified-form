import { Router } from "express";
import path from 'path'
let rota_login_usuario = Router()
rota_login_usuario.get('/usuario', (req, res) =>{

    res.set({
        'Content-type': 'text/html',
        'StatusCode': '200'
       })
       res.sendFile(path.join(__dirname,'../public/login_user.html'))

})
export {rota_login_usuario}