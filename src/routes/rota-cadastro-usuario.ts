import { Request, Response, Router } from "express"
import path from "path"

let rota_cadastro_usuario = Router()

rota_cadastro_usuario.get("/usuario/cadastro/", (req:Request, res:Response)=>{
   res.set({
    'Content-type': 'text/html',
    'StatusCode': '200'
   })
   res.sendFile(path.join(__dirname,'../public/cadastroUsuario.html'))
})
export {rota_cadastro_usuario}

