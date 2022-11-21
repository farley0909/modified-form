
import { abreDadosResposta } from "./abreDadosResposta.js"

async function insereRespostas(resposta, count){
    let container = document.getElementById('dashboard-respostas')
    
    try { 
        let tb = document.getElementById("tbResposta1")
        console.log("esse é o tb",tb )
        if(tb===null){
            throw new Error("Sem respsotas")
        }else{
            let tb = document.createElement("table")
            tb.id= "tbResposta1"
            let tbhead = document.createElement("thead") 
            let tr = document.createElement("tr")
            tr.classList.add('tituloResposta')
            let h3 = document.createElement("h2")
            h3.innerHTML="Resposta: "+ count
            container.appendChild(h3)
            let tr2 = document.createElement("tr")
            let th = document.createElement("th")
            th.innerHTML="Respostas"
            let th2 = document.createElement("th")
            th2.innerHTML="Avaliações"
            let th3 = document.createElement("th")
            th3.innerHTML="Justificativas"
            tr2.appendChild(th)
            tr2.appendChild(th2)
            tr2.appendChild(th3)
            tbhead.appendChild(tr2)
            tb.appendChild(tbhead)
            //-------------Setando o body-----------///
            let tbody = document.createElement("tbody")
            let tr3 = document.createElement("tr")
            let td = document.createElement('td')
            td.innerHTML=""+resposta.resposta1
            let td2= document.createElement('td')
            td2.innerHTML=""+resposta.avaliacao1
            let td3= document.createElement('td')
            td3.innerHTML=""+resposta.justificativa1
            tr3.appendChild(td)
            tr3.appendChild(td2)
            tr3.appendChild(td3)
            tbody.appendChild(tr3)
            ///////////////////////////////
            let tr4 = document.createElement("tr")
            let td4 = document.createElement('td')
            td4.innerHTML=""+resposta.resposta2
            let td5= document.createElement('td')
            td5.innerHTML=""+resposta.avaliacao2
            let td6= document.createElement('td')
            td6.innerHTML=""+resposta.justificativa2
            tr4.appendChild(td4)
            tr4.appendChild(td5)
            tr4.appendChild(td6)
            tbody.appendChild(tr4)
            ///////////////////////////////
            let tr5 = document.createElement("tr")
            let td7 = document.createElement('td')
            td7.innerHTML=""+resposta.resposta3
            let td8= document.createElement('td')
            td8.innerHTML=""+resposta.avaliacao3
            let td9= document.createElement('td')
            td9.innerHTML=""+resposta.justificativa3
            tr5.appendChild(td7)
            tr5.appendChild(td8)
            tr5.appendChild(td9)
            tbody.appendChild(tr5)
            tb.appendChild(tbody)
            container.appendChild(tb)
        }
    }catch (error) {
        let tb = document.createElement("table")
        tb.id= "tbResposta1"
        let tbhead = document.createElement("thead") 
        let tr = document.createElement("tr")
        let h3 = document.createElement("h2")
        h3.innerHTML="Resposta: "+ count
        container.appendChild(h3)
       
        tbhead.appendChild(tr)
        let tr2 = document.createElement("tr")
        let th = document.createElement("th")
        th.innerHTML="Respostas"
        let th2 = document.createElement("th")
        th2.innerHTML="Avaliações"
        let th3 = document.createElement("th")
        th3.innerHTML="Justificativas"
        tr2.appendChild(th)
        tr2.appendChild(th2)
        tr2.appendChild(th3)
        tbhead.appendChild(tr2)
        tb.appendChild(tbhead)
        //-------------Setando o body-----------///
        let tbody = document.createElement("tbody")
        let tr3 = document.createElement("tr")
        let td = document.createElement('td')
        td.innerHTML=""+resposta.resposta1
        let td2= document.createElement('td')
        td2.innerHTML=""+resposta.avaliacao1
        let td3= document.createElement('td')
        td3.innerHTML=""+resposta.justificativa1
        tr3.appendChild(td)
        tr3.appendChild(td2)
        tr3.appendChild(td3)
        tbody.appendChild(tr3)
        ///////////////////////////////
        let tr4 = document.createElement("tr")
        let td4 = document.createElement('td')
        td4.innerHTML=""+resposta.resposta2
        let td5= document.createElement('td')
        td5.innerHTML=""+resposta.avaliacao2
        let td6= document.createElement('td')
        td6.innerHTML=""+resposta.justificativa2
        tr4.appendChild(td4)
        tr4.appendChild(td5)
        tr4.appendChild(td6)
        tbody.appendChild(tr4)
        ///////////////////////////////
        let tr5 = document.createElement("tr")
        let td7 = document.createElement('td')
        td7.innerHTML=""+resposta.resposta3
        let td8= document.createElement('td')
        td8.innerHTML=""+resposta.avaliacao3
        let td9= document.createElement('td')
        td9.innerHTML=""+resposta.justificativa3
        tr5.appendChild(td7)
        tr5.appendChild(td8)
        tr5.appendChild(td9)
        tbody.appendChild(tr5)
        tb.appendChild(tbody)
        container.appendChild(tb)
        
    }
    
}
export { insereRespostas }