const express = require ('express');
const cors = require ('cors')

const app = express();
app.use(express.json());
app.use(cors());

let filmes = [
    {
        titulo: "Circulo de fogo",
        sinopse: "Robos gigantes versus Kaijus: dinossauros de uma dimensão alienigena",
    },
    {
        titulo: "O diabo veste prada",
        sinopse: "Secretaria da maior referencia de moda de nova york, é humilhada pela chefe constantemente na escala 7x0 e recorre aos seus direitos trabalhistas",
    },
    {
        titulo: "67",
        sinopse: "O primeiro farmador de aura"
    }
]

//GET - http://localhost:3000/oi
app.get ('/oi', (req, res) => {
    res.send('oi');
})

//GET - http://localhost:3000/filmes
app.get ('/filmes', (req, res) => {
    res.json(filmes)
})

//POST - http://localhost:3000/filmes
app.post ('/filmes', (req, res) => {
    //pega o que o usuario digita
    let titulo = req.body.titulo;
    let sinopse = req.body.sinopse;
    //monta o JSON
    let filme = {
        titulo: titulo,
        sinopse: sinopse
    }
    //acrescenta filmes ao vetor de filmes
    filmes.push(filme);
    res.json(filmes);
})


app.listen(3000, () => console.log('servidor na escuta'));