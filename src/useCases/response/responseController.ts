import { uuid } from "uuidv4"
import { prisma } from "../connection/factory"
import { responseInterface } from "./interface/controller"
import { responseModel } from "./responseModel"

class responseController {
     model:responseModel
    constructor(){

    }
    async createAnswer(respostas, notas, justificativas, id){
    try {
        console.log(id)
        let res =   await prisma.resposta.create({
            data:{
                id:await uuid(),
                resposta1: respostas[0],
                resposta2:respostas[1],
                resposta3:respostas[2],
                avaliacao1: parseInt(notas[0]),
                avaliacao2:parseInt(notas[1]),
                avaliacao3:parseInt(notas[2]),
                justificativa1:justificativas[0],
                justificativa2:justificativas[1],
                justificativa3:justificativas[2],
                pesquisaId: id
            }
        })
        console.log("deu bom!")
    } catch (error) {
        console.log(error.message)
    }
     
    }
    async getAllAnswers(id:string){
        let res = await prisma.resposta.findMany({
            where:{
                pesquisaId:id
            }
        })
        return res
    }
/* id             String   @unique
  resposta1      String
  resposta2      String
  resposta3      String
  avaliacao1     Int
  avaliacao2     Int
  avaliacao3     Int
  justificativa1 String
  justificativa2 String
  justificativa3 String
  pesquisaId     String
  pesquisa       Pesquisa @relation(fields: [pesquisaId], references: [id])*/


}
export { responseController }