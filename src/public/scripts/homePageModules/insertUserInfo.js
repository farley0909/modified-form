function insertUserData(usuario){
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
export { insertUserData }