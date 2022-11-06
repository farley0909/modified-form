import { Router } from "express";
import { pesquisaModel } from "../useCases/cadastroPesquisa/pesquisaModel";
import jwt from 'jsonwebtoken'
import { pesquisaController } from "../useCases/cadastroPesquisa/pesquisaController";

let rota_questionairos= Router()

rota_questionairos.post('/pesquisas/cadastro/:token', async (req, res)=>{
    const { questao } = req.body
    console.log()
    let token = req.params.token
    let idUsuario
    try {
        idUsuario = await jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        console.log('houve um erro: ', error)
    }
    let pesquisaM  = new pesquisaModel(idUsuario.id, questao)
    let pesquisaC = new pesquisaController(pesquisaM)
    await pesquisaC.salvar()
    res.json({cadastrado:'cadastrou'})
    
})
export { rota_questionairos }