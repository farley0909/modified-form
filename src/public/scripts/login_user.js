let btn = document.getElementById("formLogin")
let str = document.cookie
console.log(document.cookie)
let index = str.indexOf('hasError')
console.log(index)
let hasError = str.substring(index, index+14)
console.log(hasError)
let dividido = hasError.split('=')
if(dividido[1]==="true;" ||dividido[1]==="true"  ){
    console.log('Teve erro de login')
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let lbSenha = document.getElementById("lbSenha")
    let lbEmail = document.getElementById("lbEmail")
    email.classList.add("invalid")
    senha.classList.add("invalid")
    lbEmail.style.color="red"
    lbSenha.style.color="red"
    deleteAllCookies()
    console.log(document.cookie)
}else{
    console.log('Não teve erro de login')
}
btn.addEventListener('submit', async ()=>{
    event.preventDefault();
    let data = {
        email:document.getElementById("email").value,
        senha:document.getElementById("senha").value
    }
    try {
        let req = await fetch('http://localhost:8080/usuario/login',
        {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        let res = await req.json()
        if(res.message!=false){
            location.href=`http://localhost:8080/inicio/${res.message}` 
        }else{
            let email = document.getElementById("email")
            let senha = document.getElementById("senha")
            let lbSenha = document.getElementById("lbSenha")
            let lbEmail = document.getElementById("lbEmail")
            email.classList.add("invalid")
            senha.classList.add("invalid")
            lbEmail.style.color="red"
            lbSenha.style.color="red"
        }
    } catch (error) {
        console.log("houve um erro na requisição do token!!")
    }
   
})
      

function deleteAllCookies() {
    var c = document.cookie.split("; ");
    for (i in c) 
     document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";    
   }