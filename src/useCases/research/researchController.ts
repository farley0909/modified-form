import { prisma } from "../connection/factory"
import { responseModel } from "../response/responseModel";
import { researchInterface } from "./interface/reseachInterface";
import { researchModel } from "./ResearchModel";

export class researchController implements researchInterface {

    researModel:researchModel
    constructor(pesquisaModel?){
        if(pesquisaModel){
            this.researModel = pesquisaModel
        }
    }
   async save( researchModel:researchModel ){
        await prisma.pesquisa.create({
            data:{
                id:             researchModel.getId(),
                questao:        researchModel.getresearch(),
                autorId:        researchModel.getAuthor(),
                data_criacao:   researchModel.getCreationDate(),
                respondivel:    researchModel.getAnswerable()
            }
       })
    }
    async getOneResearch(id:string):Promise<any>  {
        let research = await prisma.pesquisa.findFirst({
            where:{
                id:id
            }
        })
     
        return research
    }
    async getAllReseachs(autorId:string): Promise<researchModel[]>{
        let allResearchs = await prisma.pesquisa.findMany({
            where:{
                autorId:autorId
            }
        })
        let researchs = new Array<researchModel>
        for(let k=0; k<allResearchs.length;k++){
            researchs.push(
                new researchModel(
                    allResearchs[k].autorId,
                    allResearchs[k].questao,
                    allResearchs[k].id,
                    allResearchs[k].respondivel,
                    allResearchs[k].data_criacao
                    )
                )
        }
        return researchs
    }
    async removeResearch(id:string): Promise<void> {
        try {
            await prisma.resposta.deleteMany({
                where:{
                    pesquisaId:id
                }
            }) 
            await prisma.pesquisa.delete({
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log(error.message) 
        }
    }
      
    async switchAnswerable(id:string){  
        let res = await prisma.pesquisa.findFirst({
            where:{
                id:id
            }
        })
        if(res.respondivel){
            await prisma.pesquisa.update({
                where:{
                    id:id
                },data:{
                   respondivel:false 
                }
            })
        }else{
            await prisma.pesquisa.update({
                where:{
                    id:id
                },data:{
                   respondivel:true 
                }
            })  
        }
    
    }
}