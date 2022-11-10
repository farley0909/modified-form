import { Router } from "express";
import { pesquisaController } from "../useCases/cadastroPesquisa/pesquisaController";

const  route_getRespostaById= Router()
route_getRespostaById.get('/resposta/id/:id', async (req, res)=>{
    try {
        const id = req.params.id
        let researchController = new pesquisaController
        let pesquisa = await researchController.getOnePesquisa(id)  
        res.json({pesquisa:pesquisa})
    } catch (error) {
        res.json({pesquisa:error.message})
    }
})
export { route_getRespostaById }