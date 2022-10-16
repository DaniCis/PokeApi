const {Router} = require('express');
const {getAllPokemon, getPokemon, getPokemonTipo, getPokemonHabilidad} = require('../controllers/pokemon.controller')

const router = Router();

router.get('/pokemon', getAllPokemon)
router.get('/pokemon/:id', getPokemon)
router.get('/pokemon/tipo/:id', getPokemonTipo)
router.get('/pokemon/habilidad/:id', getPokemonHabilidad)

module.exports = router;