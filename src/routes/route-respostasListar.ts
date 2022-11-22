import { Router } from "express";
import { verificaToken } from "../middleware/verificaToken";
import { responseController } from "../useCases/response/responseController";

let route_respostasListar = Router()
route_respostasListar.post('/respostas/listar/:token',  async (req, res)=>{
    try {
        let {token} = req.params
        let {id} = req.body
        let controller = new responseController()
        let answers  = await controller.getAllAnswers(id)
        res.json({respostas: answers})
    } catch (error) {
        res.json({respostas: false})
    }
    
})
export { route_respostasListar }