import express from "express";

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.json({status: 'ok'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})