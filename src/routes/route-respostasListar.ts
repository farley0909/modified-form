import { Router } from "express";
import { responseController } from "../useCases/response/responseController";

let route_respostasListar = Router()
route_respostasListar.post('/respostas/listar/:token', async (req, res)=>{
    try {
        let {token} = req.params
        let {id} = req.body
        let controller = new responseController()
        let respsotas  = await controller.getAllRespostas(id)
        res.json({respostas: respsotas})
    } catch (error) {
        res.json({respostas: false})
    }
    
})
export { route_respostasListar }