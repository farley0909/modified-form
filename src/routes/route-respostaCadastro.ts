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
    console.log(respostas)
    console.log(notas)
    console.log(justificativas)
    console.log(idPesquisa)
    let controller = new responseController()
    await controller.createAnswer(respostas, notas, justificativas, idPesquisa)
    res.json({status:true})
   } catch (error) {
    console.log(error)
    res.json({status:error.message})
   } 
})


export {
    route_respostaCadastro
}