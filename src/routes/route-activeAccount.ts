import { Router } from "express";
import { cadastroController } from "../useCases/User/cadastro_controller";
import jwt from 'jsonwebtoken'
import path from 'path'

let route_activeAccount = Router()

route_activeAccount.get("/confirmar/:idEncriptado", async (req, res)=>{
    const idEncriptado = req.params.idEncriptado
    let usController =  new cadastroController()
        try {
            let users =  await usController.getAlluser()
            let decodded = jwt.verify(idEncriptado, process.env.JWT_SECRET);
            users.forEach(async el =>{
                if(el.id == decodded.id){
                   await usController.activeAccount(el.id)
                   res.status(200)
                   res.sendFile(path.join(__dirname,'../public/conta_ativada.html')) 
                }
            })
        }catch (error) {
            res.status(401)
            res.send("Token inválido!")
        }   
})
export {route_activeAccount}