import 'dotenv/config'
import express from "express";
import rotas from './routes/routes';


const app = express();

app.use(express.json());
app.use(rotas)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});
