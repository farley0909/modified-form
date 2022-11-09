import { feedDashboard } from "./feedDashboard.js"

 async function openDashboard(research){
    let dashboard = document.getElementById("moodal-dashboard")
    let fade = document.getElementById('fade')
    let mainContent = document.getElementById('Conteudo-principal')
    mainContent.style.display="none"
    fade.style.display="block"
    dashboard.style.display="block"
    feedDashboard(research)
    
    
 }
 export { openDashboard }