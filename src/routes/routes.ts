import { Router } from "express"
import {
    listarCarros
} from '../controllers/controller'

const rotas = Router()



rotas.get('/carros', listarCarros)


export default rotas