class responseModel {
    private notas:Array<string>
    private respostas:Array<string>
    private justificativas:Array<string>
    private pesquisaId:string
    constructor(respostas?, notas?, justificativas?, id?){
       this.respostas = respostas
       this.notas = notas
       this.justificativas = justificativas
        this.pesquisaId=id
    }
    getRespostas():Array<string>{
        return this.respostas
    }
    getNotas():Array<string>{
        return this.notas
    }
    getJustificativas():Array<string>{
        return this.justificativas
    }
    getPesquisaId():string{
        return this.pesquisaId
    }
}
export {responseModel}