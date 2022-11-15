import { Router } from "express";
import { pesquisaController } from "../useCases/cadastroPesquisa/pesquisaController";

let route_pesquisaRespondivel = Router()
route_pesquisaRespondivel.post('/pesquisa/respondivel/:token', (req, res)=>{
 try {
    let {token} = req.params
    let {id} = req.body
    let pesquisa = new pesquisaController()
    pesquisa.pesquisaRespondivel(id)
    res.json({status: true})
 } catch (error) {
    res.json({status: false})
 }


})
export {route_pesquisaRespondivel}