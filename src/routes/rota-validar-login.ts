import { Request, Router } from "express";
import { resolve } from "path";
import { cadastroController } from "../useCases/cadastro_usuario/cadastro_controller";
import { rota_login_usuario } from "./rota-login-usuario";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const rota_validar_login = Router()

rota_validar_login.post("/usuario/login", async (req, res)=>{
    const {email, senha} = req.body
    let valida = await validarLogin(email, senha)
    if(valida!= false){
        let token = await jwt.sign({id:valida.id}, process.env.JWT_SECRET, {expiresIn:"1h"})
        res.json({message:token})
    }else{
        res.json({message:valida})
    }
    res.end()
   
})


async function validarLogin(email, senha){
    const usController = new cadastroController()
    let userFromBD  = await usController.getOneUserByEmail(email)
    if(userFromBD != null){
       let senhaVerifica = await bcrypt.compare(senha, userFromBD.senha)
        if((userFromBD.email).match(email) && senhaVerifica && userFromBD.conta_Ativa){
            return userFromBD
        }else{
            return false
        }
    }else{
        return false
    }
}



export {rota_validar_login}