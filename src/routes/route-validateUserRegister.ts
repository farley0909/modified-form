import { Request, Response, Router } from "express";
import { cadastroController } from "../useCases/User/cadastro_controller";
import { cadastroModel } from "../useCases/User/cadastro_model";
import path from 'path'
let route_validateUserRegister= Router()

route_validateUserRegister.post("/usuario/cadastro/validar/", async (req:Request, res:Response)=>{
    const {nome, email, senha, cidade, estado, telefone} = req.body
    let usModel = new cadastroModel( false, nome, senha, email, estado, cidade, telefone)
    let usController = new cadastroController(usModel)
    usController.salvar()
    res.sendFile(path.join(__dirname,'../public/dados_recebidos.html'))

})
export { route_validateUserRegister }