import { uuid } from "uuidv4"

export class researchModel {
    private id:string
    private creationDate:string
    private answerable:boolean 
    constructor(
        private authorId:string,
        private research:string,
        id?,
        answerable?,
        creationDate?
    ){ 
        if(id){
            this.id=id
        }else{
            this.id = uuid()
        }
        if (answerable == false) {
            this.answerable  == answerable
        } else {
            this.answerable = true 
        }
        if(creationDate){
            this.creationDate=creationDate
        }else{
           this.creationDate = new Date().toLocaleString();
        }
        
    }
    getAnswerable():boolean {
        return this.answerable
    }
    setAnswerable(res:boolean){
        this.answerable = res
    }
    getCreationDate():string{
        return this.creationDate
    }
    getAuthor():string{
        return this.authorId
    }
    getresearch():string{
        return this.research
    }
    getId(){
        return this.id
    }

}