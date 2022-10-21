const db = require('../database')

const getAllPokemon = async (req ,res , next)=>{
    try{
        const AllPokemon = await db.query('SELECT id_pokemon, nombre_pokemon, descripcion_pokemon, imagen_pokemon FROM pokemon')
        res.status(200).json(AllPokemon.rows)
    }catch(error){
        next(error)
    }
}

const getTenPokemon = async (req ,res , next)=>{
    try{
        const TenPokemon = await db.query('SELECT id_pokemon, nombre_pokemon, descripcion_pokemon, imagen_pokemon FROM pokemon'+
        ' ORDER BY RANDOM() LIMIT 10')
        res.status(200).json(TenPokemon.rows)
    }catch(error){
        next(error)
    }
}

const getPokemon = async (req, res, next)=>{
    try{
        const { id } = req.params
        const OnePokemon = await db.query('SELECT id_pokemon, nombre_pokemon, descripcion_pokemon, imagen_pokemon,'+
        'altura_pokemon, peso_pokemon, nombre_habilidad, nombre_tipo, evolucion_pokemon FROM pokemon '+
        'INNER JOIN tipo_pokemon t ON id_pokemon = t.pokemon_id_pokemon '+ 
        'INNER JOIN tipo ON t.tipo_id_tipo = id_tipo '+
        'INNER JOIN habilidad_pokemon h ON id_pokemon = h.pokemon_id_pokemon '+
        'INNER JOIN habilidad ON h.habilidad_id_habilidad = id_habilidad '+
        'WHERE id_pokemon = $1 ',[id])
        
        if(OnePokemon.rows.length === 0){
            return res.status(404).json({
                message:'Pokemon no encontrado'
            })
        }
        res.json(OnePokemon.rows)
    }
    catch(error){
        next(error)
    }
}

const getPokemonTipo = async (req , res, next) =>{
    try{
        const {id } = req.params
        const tipo = await db.query('SELECT id_tipo, nombre_tipo FROM pokemon '+
        'INNER JOIN tipo_pokemon t ON id_pokemon = t.pokemon_id_pokemon '+ 
        'INNER JOIN tipo ON t.tipo_id_tipo = id_tipo '+
        'WHERE id_pokemon = $1 ',[id])
        res.json(tipo.rows)
    }catch(error){
        next(error)
    }
}

const getPokemonHabilidad = async (req , res, next) =>{
    try{
        const {id } = req.params
        const habilidad = await db.query('SELECT id_habilidad, nombre_habilidad FROM pokemon '+
        'INNER JOIN habilidad_pokemon h ON id_pokemon = h.pokemon_id_pokemon '+
        'INNER JOIN habilidad ON h.habilidad_id_habilidad = id_habilidad '+
        'WHERE id_pokemon = $1 ',[id])
        res.json(habilidad.rows)
    }catch(error){
        next(error)
    }
}

const getPokemonEvolve = async (req, res, next) =>{
    try{
        const {id } = req.params
        const evolved = await db.query('SELECT evolucion_pokemon FROM pokemon '+
        'WHERE id_pokemon = $1 ',[id])
        res.status(200).json(evolved.rows)
    }catch(error){
        next(error)
    }
}

const searchPokemon = async (req, res, next) =>{
    try{
        const { nom } = req.params
        const busqueda = await db.query("SELECT * From pokemon WHERE nombre_pokemon LIKE $1",[`%${nom}%`])
        res.json(busqueda.rows)
    }catch(error){
        next(error)
    }
}

module.exports ={
    getAllPokemon,
    getTenPokemon,
    getPokemon,
    getPokemonTipo,
    getPokemonHabilidad,
    searchPokemon,
    getPokemonEvolve,
}
