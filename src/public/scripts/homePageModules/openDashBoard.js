import { feedDashboard } from "./feedDashboard.js"

 async function openDashboard(research){
   console.log("openDashBoard: ", research)
    let dashboard = document.getElementById("moodal-dashboard")
    let fade = document.getElementById('fade')
    let mainContent = document.getElementById('Conteudo-principal')
    let respostaTab = document.getElementById('dashboard-respostas')
    mainContent.style.display="none"
    fade.style.display="block"
    dashboard.style.display="none"
    dashboard.style.display="block"
    feedDashboard(research)
 }
 export { openDashboard }