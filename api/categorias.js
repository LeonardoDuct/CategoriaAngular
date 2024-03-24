const express = require('express');
const router = express.Router();

const CATEGORIAS = [
  {
    "_id": "613be41ddb9c47fb90d20d98",
    "nome": 'Comédia',
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "COM01",
        "nome": "As Branquelas",
        "ano": 2004,
        "diretor": "Keenen Ivory Wayans",
        "elenco":"Marlon Wayans, Shawn Wayans, Kerry Washington, Jennifer Carpenter",
        "img":"../../../assets/branquelas.jpg",
      },
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "COM02",
        "nome": "Escola de Rock",
        "ano": 2003,
        "diretor": "Richard Linklater",
        "elenco":"Jack Black, Joan Cusack, Mike White, Sarah Silverman",
        "img":"../../../assets/escola.jpg",
      }
    ],
  },
  {
    "_id": "613be41ddb9c47fb90d20d99",
    "nome": 'Drama',
    "filmes": [
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "DRAM01",
        "nome": "O Poderoso Chefão",
        "ano": 1972,
        "diretor": "Francis Ford Coppola",
        "elenco":"Marlon Brando, Al Pacino, James Caan, Robert Duvall",
        "img":"../../../assets/poderoso-chefao.jpg"
      },
      {
        "_id": "613be41ddb9c47fb90d20d8e",
        "codigo": "DRAM02",
        "nome": "O Senhor dos Anéis: A Sociedade do Anel",
        "ano": 2001,
        "diretor": "Peter Jackson",
        "elenco":"Elijah Wood, Ian McKellen, Viggo Mortensen, Sean Astin",
        "img":"../../../assets/senhor-aneis.jpg"
      }
    ],
  },
];

router.get('/', function(req, res, next){
  res.json(CATEGORIAS.map(t => ({
    _id: t._id,
    nome: t.nome
  })));
});

router.get('/:_id', function(req, res, next){
  const _id = req.params._id;
  const categorias = CATEGORIAS.find(t => t._id === _id);
  res.json(categorias);
});

module.exports = router;
