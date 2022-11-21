import { modelResponse } from "./interface/model"

class responseModel implements modelResponse{
    constructor(
        private researchId:string,
        private answer1:string,
        private answer2:string,
        private answer3:string,
        private evaluation1:number,
        private evaluation2:number,
        private evaluation3:number,
        private justification1:string,
        private justification2:string,
        private justification3:string    
    ){}
    getAnswers():Array<string>{
        let answers = new Array<string>
        answers.push(this.answer1)
        answers.push(this.answer2)
        answers.push(this.answer3)
        return answers
    }
    getEvaluations():Array<number>{
        let evaluations = new Array<number>
        evaluations.push(this.evaluation1)
        evaluations.push(this.evaluation2)
        evaluations.push(this.evaluation3)
        return evaluations
    }
    getJustifications():Array<string>{
        let justifications = new Array<string>
        justifications.push(this.justification1)
        justifications.push(this.justification2)
        justifications.push(this.justification3)
        return justifications
    }
    getResearchId():string{
        return this.researchId
    }
}
export {responseModel}