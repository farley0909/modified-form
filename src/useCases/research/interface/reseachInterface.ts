import { researchModel } from "../ResearchModel"

export interface researchInterface {
    //Properties
    researModel: researchModel
    //Methods
    save(researchModel:researchModel) :void
    getOneResearch(id:string):Promise<researchModel>
    getAllReseachs(autorId:string):Promise<researchModel[]>
    removeResearch(id:string):void
    switchAnswerable(id:string):void
}