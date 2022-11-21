import { getToken } from "./getToken.js"
import { insereRespostas } from "./insereRespostas.js"

async function feedAnswers(answers){
    let res = await answers
    let token = getToken()
    let req = await fetch("http://localhost:8080/respostas/listar/"+token, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: res.id})
    })
    let rs = await req.json()
    let cont = 0
    for(let k=0;k<rs.respostas.length;k++){
       
        insereRespostas( rs.respostas[k], k+1) 
    }
    console.log(rs.respostas)
//
}

export {feedAnswers}