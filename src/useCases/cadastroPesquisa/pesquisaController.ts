import { prisma } from "../connection/factory"
import { pesquisaModel } from "./pesquisaModel";

export class pesquisaController{
    private pesquisaModel:pesquisaModel
    constructor(pesquisaModel?){
        if(pesquisaModel){
            this.pesquisaModel = pesquisaModel
        }
    }
   async  salvar(pesquisaModel?){
       let pesquisa = await prisma.pesquisa.create({
        data:{
            id: this.pesquisaModel.getId(),
            questao:this.pesquisaModel.getPesquisa(),
            autorId:this.pesquisaModel.getAutor(),
            data_criacao: this.pesquisaModel.getDataCriacao(),
            respondivel: this.pesquisaModel.getRespondivel()
        }
       })

    }
    async getOnePesquisa(id){
        let pesquisa = await prisma.pesquisa.findFirst({
            where:{
                id:id
            }
        })
        console.log(pesquisa)
        return pesquisa
    }
    async getAllpesquisa(id){
        let pesquisas = await prisma.pesquisa.findMany({
            where:{
                autorId:id
            }
        })

        return pesquisas
    }
    async deletaPesquisa(id:string) {
        try {
            await prisma.pesquisa.delete({
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    async pesquisaRespondivel(id:string){
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