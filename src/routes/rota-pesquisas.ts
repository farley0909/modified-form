import { Router } from "express";
import jwt from 'jsonwebtoken'
import { pesquisaController } from "../useCases/cadastroPesquisa/pesquisaController";
let rota_pesquisas = Router()

rota_pesquisas.get('/pesquisas/:token', async (req, res)=>{
    let token = req.params.token
    let pesquisaC =  new pesquisaController()
    try {
        let user = jwt.verify(token, process.env.JWT_SECRET)
        let pesquisas = await pesquisaC.getAllpesquisa(user.id)
        res.json({pesquisas: pesquisas})
    } catch (error) {
        console.log("Houve um erro na rota de envio das pesqusias: ", error.message)
    }
    
    

})

export {rota_pesquisas}