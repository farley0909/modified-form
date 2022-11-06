import { uuid } from "uuidv4"

export class pesquisaModel{
    private id:string
    private dataCriacao = new Date().toLocaleString();
    constructor(
        private autorId:string,
        private questao:string,
        id?
    ){ 
        if(id){
            this.id=id
        }else{
            this.id = uuid()
        }
    }
    getDataCriacao():string{
        return this.dataCriacao
    }
    getAutor():string{
        return this.autorId
    }
    getPesquisa():string{
        return this.questao
    }
    getId(){
        return this.id
    }

}