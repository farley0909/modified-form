import { Router } from "express";
import { cadastroController } from "../useCases/cadastro_usuario/cadastro_controller";
import jwt from 'jsonwebtoken'
import path from 'path'

let route_confirmar = Router()

route_confirmar.get("/confirmar/:token", async (req, res)=>{
    const token = req.params.token
    let usController =  new cadastroController()
        
    

        try {
            let users =  await usController.getAlluser()
            let decodded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decodded)
            users.forEach(async el =>{
                if(el.id == decodded.id){
                   await usController.activeAccount(el.id)
                   res.status(200)
                   res.sendFile(path.join(__dirname,'../public/conta_ativada.html'))
                   return 0 
                }
            
            })
        } catch (error) {
            res.status(401)
            res.send("Token inválido!")
        }
       
   
})
export {route_confirmar}