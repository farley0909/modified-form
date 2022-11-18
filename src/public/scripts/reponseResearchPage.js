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
let pesquisa
window.addEventListener('load',async ()=>{
    try {
        pesquisa = await getResearchById(id) 
        if(pesquisa.respondivel){
            mostraPesquisaTitulo(pesquisa) 
           let group1 =  document.querySelectorAll('.group1')
           group1.forEach(el => {
                el.addEventListener('click', ()=>{
                    document.getElementById("campoJustificativa").style.display="block"
                })
           })
            btnProximo.addEventListener('click', async ()=>{
            let resposta1 = document.getElementById('resposta1')
            let resposta2 = document.getElementById('resposta2')
            let resposta3 = document.getElementById('resposta3')
            if(resposta1.value ==="" && resposta2.value === "" && resposta3.value === ""){
                resposta1.classList.add("invalid")
                resposta2.classList.add("invalid")
                resposta3.classList.add("invalid")
            }else if(resposta1.value === ""){
                resposta1.classList.add("invalid")
            }else if(resposta2.value===""){
                resposta2.classList.add("invalid")
            }else if(resposta3.value===""){
                resposta3.classList.add("invalid")
            }
            else{
                respostas.push(resposta1.value)
                respostas.push(resposta2.value)
                respostas.push(resposta3.value)
                openAvaliation()
                preencheLabelNotas(respostas)  
            }
                  
            })
            btnVoltarNota.addEventListener('click', ()=>{
                notas = []
                justificativas = []
                respostas = []
                document.getElementById("modal").style.display="block"
                document.getElementById("modal-nota").style.display="none"
                document.getElementById('resposta1').value=""
                document.getElementById('resposta2').value=""
                document.getElementById('resposta3').value=""
            })
            //////////////////////
            btnProximoNota.addEventListener('click', ()=>{
                if(justificativas.length == 0){
                    notas.push(getNotas())
                    justificativas.push(getJustificativas())
                    document.getElementById("campoJustificativa").style.display="none"
                    document.getElementById("nota-resposta").innerHTML=""+respostas[1]
                    document.getElementById("justificativaText").value=" "
                    let group1 = document.querySelectorAll('.group1')
                        group1.forEach(el => {
                            if(el.checked){
                                el.checked=false
                                document.getElementById("campoJustificativa").style.display="none"
                                document.getElementById("nota-resposta").innerHTML=""+respostas[1]
                                document.getElementById("justificativaText").value=""
                            }
                            
                        })
                }else if(justificativas.length == 1){
                    notas.push(getNotas())
                    justificativas.push(getJustificativas())
                    let group1 = document.querySelectorAll('.group1')
                        group1.forEach(el => {
                            if(el.checked){
                                el.checked=false
                                document.getElementById("campoJustificativa").style.display="none"
                                document.getElementById("nota-resposta").innerHTML=""+respostas[2]
                                document.getElementById("justificativaText").value=""
                            }    
                        })
                }else if(justificativas.length == 2){
                    notas.push(getNotas())
                    justificativas.push(getJustificativas())
                    console.log("Essa daqui é a pesquisa: ", pesquisa)
                    try {
                        enviaResposta(notas, respostas, justificativas, pesquisa)
                    } catch (error) {
                        console.log(error.message)
                    }
                    
                }
            })
            
        }else {
            document.getElementById('modal').style.display="none"
            document.getElementById('modal-PesquisaNaoRespondivel').style.display="block"
        }
    } catch (error) {
    console.log(error) 
    document.getElementById('modal').style.display="none"
    document.getElementById('modal-PesquisaNaoRespondivel').style.display="block"   
    }
})

