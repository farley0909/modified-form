import { Request, Response, Router } from "express"
import path from "path"

let route_UserRegisterPage = Router()

route_UserRegisterPage.get("/usuario/cadastro/", (req:Request, res:Response)=>{
   res.set({
    'Content-type': 'text/html',
    'StatusCode': '200'
   })
   res.sendFile(path.join(__dirname,'../public/cadastroUsuario.html'))
})
export {route_UserRegisterPage}

