import { Request, Response } from 'express'
import { knex } from '../config/connection'
import { Carro } from '../types'
import cron from 'node-cron';
import fs from 'node:fs'

export const listarCarros = async (_: Request, res: Response) => {
    try {
        // const carros = await knex<Carro>('carros')

        const script = "* * * * *"
        const job = cron.schedule(script, () => {
            const logMessage = `Cron job executado em ${new Date().toLocaleString()}\n`;
            console.log(logMessage);
            fs.appendFile('cron.log', logMessage, function (err) {
                if (err) {
                    console.error('Erro ao gravar no arquivo de log:', err);
                }
            })
        });

        job.start()

        return res.json("ok");
    } catch (e) {
        console.log(e);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}
