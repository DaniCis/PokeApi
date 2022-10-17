const {Router} = require('express');
const {getAllPokemon, getPokemon, getPokemonTipo, getPokemonHabilidad, getPokemonEvolucion, searchPokemon} = require('../controllers/pokemon.controller')

const router = Router();

router.get('/api/v1/pokemons', getAllPokemon)
router.get('/api/v1/pokemons/:id', getPokemon)
router.get('/api/v1/pokemons/tipo/:id', getPokemonTipo)
router.get('/api/v1/pokemons/habilidad/:id', getPokemonHabilidad)
router.get('/api/v1/pokemons/evolucion/:id', getPokemonEvolucion)
router.get('/api/v1/pokemons/busqueda/:nom',searchPokemon)

module.exports = router;