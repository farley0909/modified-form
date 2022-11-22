import { Router } from "express";
import jwt from 'jsonwebtoken'
import { verificaToken } from "../middleware/verificaToken";
import { researchController } from "../useCases/research/researchController";
let route_getResearchs = Router()

route_getResearchs.get('/pesquisas/:token', async (req, res)=>{
    let token = req.params.token
    let pesquisaC =  new researchController()
    try {
        let user = jwt.verify(token, process.env.JWT_SECRET)
        let pesquisas = await pesquisaC.getAllReseachs(user.id)
        res.json({pesquisas: pesquisas})
    } catch (error) {
        res.json({pesquisa:error.message})
    }
    
    

})

export {route_getResearchs}