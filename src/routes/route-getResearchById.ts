import { Router } from "express";
import { pesquisaController } from "../useCases/cadastroPesquisa/pesquisaController";

const  route_getResearchById= Router()

route_getResearchById.get('/pesquisa/id/:id', async (req, res)=>{
    
     try {
        let {id} = req.params
        let pesquisa = new pesquisaController()
       let response  = await  pesquisa.getOnePesquisa(id)
       res.json({pesquisa:response})
     } catch (error) {
        console.log({pesquisa:false})
     }
})
export { route_getResearchById }