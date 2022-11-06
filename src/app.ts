//Importando módulos externos
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import cookieParser from 'cookie-parser'
//Importando Rotas
import { rota_cadastro_usuario } from './routes/rota-cadastro-usuario'
import { rota_validar_cadastro } from './routes/rota-validar-cadastro'
import { rota_ativar_conta } from './routes/rota-ativar-conta'
import { rota_login_usuario } from './routes/rota-login-usuario'
import { rota_validar_login } from './routes/rota-validar-login'
import { rota_questionairos } from './routes/rota-questionarios'
import { rota_inicio } from './routes/rota-inicio'
import { rota_pesquisas } from './routes/rota-pesquisas'

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
app.use(rota_cadastro_usuario)
app.use(rota_validar_cadastro)
app.use (rota_ativar_conta)
app.use(rota_login_usuario) 
app.use(rota_validar_login)
app.use(rota_questionairos)
app.use(rota_inicio)
app.use(rota_pesquisas)

//Exportando app
export {app}