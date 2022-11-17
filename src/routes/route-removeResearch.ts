import { Router } from "express";
import { pesquisaController } from "../useCases/cadastroPesquisa/pesquisaController";

let route_removeResearch = Router()

route_removeResearch.post('/pesquisa/remover/:token', async (req, res)=>{
    let {id} = req.body
    console.log("Esse é o id recebido: ", id)
    let pesquisa = new pesquisaController()
    try {
       await pesquisa.deletaPesquisa(id)
       res.json({status:true})
    } catch (error) {
        res.json({status:false})
       console.log(error.message) 
    }
  
})




export {
    route_removeResearch
}