import { Router } from "express";
import { researchController } from "../useCases/research/researchController";

let route_removeResearch = Router()

route_removeResearch.post('/pesquisa/remover/:token', async (req, res)=>{
    let {id} = req.body
    console.log("Esse é o id recebido: ", id)
    let pesquisa = new researchController()
    try {
       await pesquisa.removeResearch(id)
       res.json({status:true})
    } catch (error) {
        console.log(error.message) 
        res.json({status:false})
      
    }
  
})




export {
    route_removeResearch
}