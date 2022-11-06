const btnModal = document.getElementById('btnModal') 
const btnCancelar = document.getElementById('btnCancelar') 
const btnSalvar = document.getElementById('btnSalvar') 
const token = pegaToken()
let pesquisas = pegaPesquisas()
criaLista(pesquisas)

btnModal.addEventListener('click', exibeModal)
btnCancelar.addEventListener('click', fechaModal)
btnSalvar.addEventListener('click', enviaPesquisa)



function exibeModal(){
 let fade = document.getElementById('fade')
 let mainContent = document.getElementById('Conteudo-principal')
 let modal = document.getElementById('modal')
 mainContent.style.display="none"
 fade.style.display="block"
 modal.style.display="block"
 btnModal.style.display="none"
}
function fechaModal(){
    let fade = document.getElementById('fade')
    let mainContent = document.getElementById('Conteudo-principal')
    let modal = document.getElementById('modal')
    mainContent.style.display="block"
    fade.style.display="none"
    modal.style.display="none"
    btnModal.style.display="block"
}
 async function enviaPesquisa(){
    let pesquisa = document.getElementById('pergunta').value
    try {
        let request = await fetch(`http://localhost:8080/pesquisas/cadastro/${token}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({questao: pesquisa})
        })
        let res = await request.json()
        fechaModal()
        try {
            limpaLista()
        console.log('chamou')
        let data = await pegaPesquisas()
        criaLista(data)
        } catch (error) {
            
        }
       

    } catch (error) {
        console.log("Houve um erro na request de cadastro da pesquisa: ", error)
    }
  

 }

 function pegaToken(){
    let path = location.pathname
    let pathSplit = path.split('/')
    return pathSplit[2]
 }

async function criaLista(content){
    let pesquisas = await content
    console.log(pesquisas)
    let container = document.getElementById('pesquisas')
    let ul = document.createElement('ul')
    ul.classList.add('collection')
    for(let k=0;k<pesquisas.pesquisas.length;k++){
        let a = document.createElement('a')
        a.classList.add('collection-item')
        a.setAttribute('href', '#')
        a.innerHTML=""+pesquisas.pesquisas[k].
        ul.appendChild(a)
    }
    container.appendChild(ul)
}
function limpaLista(){
    let container = document.getElementById('pesquisas')
    container.parentNode.removeChild(container)
}



 async function pegaPesquisas(){
    try {
        let req = await fetch(`http://localhost:8080/pesquisas/${token}`)
        let res = await req.json()
        return res 
    } catch (error) {
        console.log('Erro ao pegar pesquisas:'+error)
    }
  
 }

