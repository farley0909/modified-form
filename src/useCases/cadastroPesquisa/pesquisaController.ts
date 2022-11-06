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
            data_criacao: this.pesquisaModel.getDataCriacao()
        }
       })

    }
    async getOnePesquisa(id){
        let pesquisa = await prisma.pesquisa.findFirst({
            where:{
                id:id
            }
        })
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


}