const express = require('express');
const db = require('./db');
const app = express();
const port = 3333;
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))
app.use(express.json())

app.post('/cadastro', async (req, res) => {

    const { tutor, pet, raca, genero, peso, idade } = req.body;

    try {

        const sql = `
            INSERT INTO pets
            (tutor, pet, raca, genero, peso, idade)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await db.execute(sql, [
            tutor,
            pet,
            raca,
            genero,
            peso,
            idade
        ]);

        res.json({
            mensagem: 'Cadastro realizado com sucesso!'
        });

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            mensagem: 'Erro ao cadastrar o pet.'
        });
    }
});

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
});