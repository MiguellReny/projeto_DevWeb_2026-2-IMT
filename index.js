const express = require ('express');

const app = express();
app.use(express.json());

let filmes = [
    {
        titulo: "Circulo de fogo",
        sinopse: "Robos gigantes versus Kaijus: dinossauros de uma dimensão alienigena",
    },
    {
        titulo: "O diabo veste prada",
        sinopse: "Secretaria da maior referencia de moda de nova york, é humilhada pela chefe constantemente na escala 7x0 e recorre aos seus direitos trabalhistas",
    },
]

//GET - http://localhost:3000/oi
app.get ('/oi', (req, res) => {
    res.send('oi');
})

//GET - http://localhost:3000/filmes
app.get ('/filmes', (req, res) => {
    res.json(filmes)
})


app.listen(3000, () => console.log('servidor na escuta'));