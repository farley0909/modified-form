import { enviaResposta } from "./responseResearchPageModules/enviaResposta.js"
import { getJustificativas } from "./responseResearchPageModules/getJustificativas.js"
import { getNotas } from "./responseResearchPageModules/getNotas.js"
import { getResearchById } from "./responseResearchPageModules/getResearchById.js"
import { mostraPesquisaTitulo } from "./responseResearchPageModules/mostraPesquisaTitulo.js"
import { openAvaliation } from "./responseResearchPageModules/openAvaliation.js"
import { openJustification } from "./responseResearchPageModules/openJustification.js"
import { preencheLabelJustificativa } from "./responseResearchPageModules/preencheLabelJustificativa.js"
import { preencheLabelNotas } from "./responseResearchPageModules/preencheLabelNotas.js"
let btnProximo = document.getElementById('btnProximo')
let btnProximoNota = document.getElementById('btnProximoNota')
let btnVoltarNota = document.getElementById('btnVoltarNota')
let btnVoltarJustificativa = document.getElementById("btnVoltarJustificativa")
let btnProximoJustificativa = document.getElementById("btnProximoJustificativa")
let respostas=[]
let justificativas = []
let notas = []
let path = location.pathname
let splitado = path.split('/')
let id = splitado[2]
let pesquisa = await getResearchById(id)
if(pesquisa.respondivel){
    mostraPesquisaTitulo(pesquisa) 
    btnProximo.addEventListener('click', async ()=>{
            let resposta1 = document.getElementById('resposta1')
            let resposta2 = document.getElementById('resposta2')
            let resposta3 = document.getElementById('resposta3')
            if(resposta1.value ===""){
                resposta1.classList.add("invalid")
            }else if(resposta2.value === ""){
                resposta2.classList.add("invalid")
            }else if(resposta3.value===""){
                resposta3.classList.add("invalid")
            }else{
                respostas.push(resposta1.value)
                respostas.push(resposta2.value)
                respostas.push(resposta3.value)
                openAvaliation()
                preencheLabelNotas(respostas)  
            }
          
    })
    btnProximoNota.addEventListener('click', ()=>{
        notas = getNotas()
        console.log("Notas recebidas", notas)
        openJustification()
        preencheLabelJustificativa(respostas)
    
        //justificativa-resposta1
    })
    btnProximoJustificativa.addEventListener('click', ()=>{
        justificativas = getJustificativas()
        console.log(justificativas)
        enviaResposta(notas, respostas, justificativas, pesquisa)
    })
    btnVoltarJustificativa.addEventListener('click', ()=>{
        notas = []
        document.getElementById('modal').style.display="none"
        document.getElementById("modal-nota").style.display="block"
        document.getElementById("modal-justificativa").style.display="none"
    })
    
    btnVoltarNota.addEventListener('click', ()=>{
        notas=[]
        respostas=[]
        document.getElementById('modal').style.display="block"
        document.getElementById("modal-nota").style.display="none"
    })
}else {
    document.getElementById('modal').style.display="none"
    document.getElementById('modal-PesquisaNaoRespondivel').style.display="block"
}
