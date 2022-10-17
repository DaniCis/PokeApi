const {Router} = require('express');
const {getAllPokemon, getPokemon, getPokemonTipo, getPokemonHabilidad, getPokemonEvolucion, searchPokemon} = require('../controllers/pokemon.controller')

const router = Router();

router.get('/api/v1/pokemon', getAllPokemon)
router.get('/api/v1/pokemon/:id', getPokemon)
router.get('/api/v1/type/:id', getPokemonTipo)
router.get('/api/v1/ability/:id', getPokemonHabilidad)
router.get('/api/v1/pokemon/evolucion/:id', getPokemonEvolucion)
router.get('/api/v1/pokemon/search/:nom',searchPokemon)

module.exports = router;