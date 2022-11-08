const btnModal = document.getElementById('btnModal') 
const btnCancelar = document.getElementById('btnCancelar') 
const btnSalvar = document.getElementById('btnSalvar') 
const token = pegaToken()

btnModal.addEventListener('click', exibeModal)
btnCancelar.addEventListener('click', fechaModal)
btnSalvar.addEventListener('click', enviaPesquisa)

async function main(){  
    let pesquisas =await pegaPesquisas()
    let dadosPesquisador = await getDadosUsuario()
    inserirNome(dadosPesquisador)
    console.log(pesquisas.pesquisas.length)
    if(pesquisas.pesquisas.length === 0){
        console.log("Lista vazia")
    }else{
        criaLista(pesquisas)
    }
}
main()
function inserirNome(usuario){
    let content = document.getElementById("dadosUsuario")
    let i = document.createElement('i')
    i.classList.add("material-icons")
    i.classList.add("left")
    i.classList.add("small")
    
    i.innerHTML="account_circle"
    let span = document.createElement('span')
    span.classList.add('nomeUsuario')
    span.innerHTML=""+usuario.nome 
    span.appendChild(i)
    content.appendChild(span)
}
async function getDadosUsuario(){
    let req = await fetch(`http://localhost:8080/usuario/info/${token}`)
    let res = await req.json()

    return res.usuario
}
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
    try{
        let ul = document.getElementsByClassName('collection')
        let a = document.createElement('a')
        a.classList.add('collection-item')
        a.innerHTML=""+pesquisa
        ul[0].appendChild(a)
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
        } catch (error) {
            console.log("Houve um erro na request de cadastro da pesquisa: ", error)
        }
    }catch(error){
        try {
            let request = await fetch(`http://localhost:8080/pesquisas/cadastro/${token}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({questao: pesquisa})
            })
            console.log('entrou no try quando n tem ul')
            let res = await request.json()
            let divPesquisas = document.getElementById('pesquisas')
            let ul = document.createElement('ul')
            ul.classList.add('collection')
            let a = document.createElement('a')
            a.classList.add('collection-item')
            a.innerHTML=""+pesquisa
            ul.appendChild(a)
            divPesquisas.appendChild(ul)
            fechaModal()
        } catch (error) {
            console.log("Houve um erro na request de cadastro da pesquisa: ", error)
        }
    }
 }

 function pegaToken(){
    let path = location.pathname
    let pathSplit = path.split('/')
    return pathSplit[2]
 }

async function criaLista(content){
    let pesquisas = await content
    console.log('Esse é o content do criaLista: ', pesquisas.pesquisas[0].questao)
    let divPesquisas = document.getElementById('pesquisas')
    let ul = document.createElement('ul')
    ul.classList.add('collection')
    for(let k=0;k<pesquisas.pesquisas.length;k++){
        let a = document.createElement('a')
        a.classList.add("collection-item")
        a.innerHTML=""+pesquisas.pesquisas[k].questao
        ul.appendChild(a)
    }
    divPesquisas.appendChild(ul)

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

