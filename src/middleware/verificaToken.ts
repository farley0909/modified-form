import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
let verificaToken =  (res, req, next) =>{
    try {
        let token = req.params.token 
        console.log(token)
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) { 
            if (err){
                res.redirect('http://localhost:8080/usuario/')
            }else{
                next(); 
            }
            
        }); 
    } catch (error) {
      console.log('error')
    }
    
}
export {verificaToken }