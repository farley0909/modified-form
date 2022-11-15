import { uuid } from "uuidv4"

export class pesquisaModel{
    private id:string
    private dataCriacao = new Date().toLocaleString();
    private respondivel:boolean =true
    constructor(
        private autorId:string,
        private questao:string,
        id?,
        respondivel?
    ){ 
        if(id){
            this.id=id
        }else{
            this.id = uuid()
        }
        if (respondivel) {
            this.respondivel
        } else {
           respondivel = true 
        }
        
    }
    getRespondivel():boolean {
        return this.respondivel
    }
    setRespondivel(res:boolean){
        this.respondivel = res
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