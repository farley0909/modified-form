import { getResearchs } from "./getResearchs.js"
import { getToken } from "./getToken.js"

async function feedDashboard(research){
    let token = getToken()
    let researchs = await getResearchs()   
    console.log('research: ', )
}
export { feedDashboard }