const {Router} = require('express');
const {getAllPokemon, getPokemon} = require('../controllers/tasks.controller')

const router = Router();

router.get('/pokemon', getAllPokemon)
router.get('/pokemon/:id', getPokemon)

module.exports = router;