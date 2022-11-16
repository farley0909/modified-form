import { abreDadosResposta } from "./abreDadosResposta.js"

function insereRespostas(respostas){
    let container = document.getElementById("dashboard-respostas")
    if(respostas.length == 0){
        document.getElementById("pesquisaSemRespostas").style.display="block"
    }else{
        try {
            let hasUl = document.getElementById("listaRespostas")
            let childs = hasUl.childNodes
            hasUl.parentNode.removeChild(hasUl)
        } catch (error) {
            
        }
        let ul = document.createElement('ul')
        ul.classList.add('collection')
        ul.id="listaRespostas"
        
        respostas.forEach(element => {
            let a = document.createElement('a')
            a.classList.add('collection-item')
            a.addEventListener('click', ()=>{
                abreDadosResposta(element)
            })
            a.innerHTML="Resposta: "+element.resposta1
            ul.appendChild(a)
          
        });
        container.appendChild(ul)
    }
  
    
}
export { insereRespostas }