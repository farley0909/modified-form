import { Router } from "express";
import { responseController } from "../useCases/response/responseController";
import { responseModel } from "../useCases/response/responseModel";

let route_respostaCadastro = Router()
route_respostaCadastro.post('/respostas/cadastro/',async  (req, res)=>{
   try {
    let {respostas}= req.body
    let {notas}= req.body
    let {justificativas}= req.body
    let {idPesquisa}= req.body
    console.log(idPesquisa)
    let model = new responseModel(respostas,notas, justificativas, idPesquisa)
    let controller = new responseController(model)
    await controller.criarResposta()
    res.json({status:'ok' })
   } catch (error) {
    
    res.json({status:error.message})
   } 
})


export {
    route_respostaCadastro
}