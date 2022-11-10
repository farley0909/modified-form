//Importando módulos externos
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
//Importando Rotas
import { route_UserRegisterPage } from './routes/route-UserRegisterPage'
import { route_validateUserRegister } from './routes/route-validateUserRegister'
import { route_activeAccount } from './routes/route-activeAccount'
import { route_loginPage } from './routes/route-loginPage'
import { route_validateLogin } from './routes/route-validateLogin'
import { route_researchRegister } from './routes/route-researchRegister'
import { route_homePage } from './routes/route-homePage'
import { route_getResearchs } from './routes/route-getResearchs'
import { route_getUserInfo } from './routes/route-getUserInfo'
import { route_responsePage } from './routes/route-responsePage'
//Parte de middlewares
const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(route_UserRegisterPage)
app.use(route_validateUserRegister)
app.use (route_activeAccount)
app.use(route_loginPage) 
app.use(route_validateLogin)
app.use(route_researchRegister)
app.use(route_homePage)
app.use(route_getResearchs)
app.use(route_getUserInfo)
app.use(route_responsePage)
//Exportando app
export {app}