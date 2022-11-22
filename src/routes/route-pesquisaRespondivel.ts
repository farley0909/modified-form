import { Router } from "express";
import { verificaToken } from "../middleware/verificaToken";
import { researchController } from "../useCases/research/researchController";

let route_pesquisaRespondivel = Router()
route_pesquisaRespondivel.post('/pesquisa/respondivel/:token', (req, res)=>{
 try {
    let {token} = req.params
    let {id} = req.body
    let pesquisa = new researchController()
    pesquisa.switchAnswerable(id)
    res.json({status: true})
 } catch (error) {
    res.json({status: false})
 }


})
export {route_pesquisaRespondivel}