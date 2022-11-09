import { Router } from "express";
import jwt from 'jsonwebtoken'
import { cadastroController } from "../useCases/User/cadastro_controller";
const route_getUserInfo= Router()

route_getUserInfo.get("/usuario/info/:token", async (req, res)=>{
    let token = req.params.token
    let usuarioController = new cadastroController()
    try {
        let user =await jwt.verify(token, process.env.JWT_SECRET)
        let request = await usuarioController.getOneUser(user.id)
        const data = {
            email: request.email,
            nome: request.nome,
            id: request.id,
            data_criacao: request.data_criacao,
            estado: request.estado,
            cidade:request.cidade
        }
        res.json({usuario:data})
    } catch (error) {
        console.log(error)
    }
})
export {route_getUserInfo}