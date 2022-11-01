let btn = document.getElementById("formLogin")
btn.addEventListener('submit', ()=>{
    event.preventDefault();
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let lbSenha = document.getElementById("lbSenha")
    let lbEmail = document.getElementById("lbEmail")
    if(email.value.length === 0 || senha.value.length===0){
        email.classList.add("invalid")
        senha.classList.add("invalid")
        lbEmail.style.color="red"
        lbSenha.style.color="red"
    }else{
       btn.submit()
    }
})