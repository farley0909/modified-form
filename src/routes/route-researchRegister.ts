import { Router } from "express";
import { researchModel } from "../useCases/research/ResearchModel";
import jwt from 'jsonwebtoken'
import { researchController } from "../useCases/research/researchController";
import { verificaToken } from "../middleware/verificaToken";

let route_researchRegister= Router()

route_researchRegister.post('/pesquisas/cadastro/:token', async (req, res)=>{
    const { questao } = req.body
    let token = req.params.token
    let idUsuario
    try {
        idUsuario = await jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        res.redirect('http:localhost:8080/usuario/')
    }
    let pesquisaM  = new researchModel(idUsuario.id, questao)
    let pesquisaC = new researchController(pesquisaM)
    await pesquisaC.save(pesquisaM)
    res.json({cadastrado:'cadastrou'})
    
})
export { route_researchRegister }