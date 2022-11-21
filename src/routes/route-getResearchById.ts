import { Router } from "express";
import { researchController } from "../useCases/research/researchController";

const  route_getResearchById= Router()

route_getResearchById.get('/pesquisa/id/:id', async (req, res)=>{
    
     try {
        let {id} = req.params
        let pesquisa = new researchController()
        console.log(id)
       let ac  = await  pesquisa.getOneResearch(id)
       console.log(ac)
       res.json({pesquisa:ac})
     } catch (error) {
        console.log({pesquisa:false})
     }
})
export { route_getResearchById }