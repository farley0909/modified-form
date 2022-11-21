import { Router } from "express";
import path from "path";
const route_responsePage = Router()

route_responsePage.get('/resposta/:id', (req, res)=>{
   try {
    let id = req.params.id
    res.sendFile(path.join(__dirname,'../public/responseResearchPage.html')) 
   } catch (error) {
    res.send(error)
   }

})

export { route_responsePage }