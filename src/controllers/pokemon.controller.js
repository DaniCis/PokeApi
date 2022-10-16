const db = require('../database')

const getAllPokemon = async (req ,res , next)=>{
    try{
        const AllPokemon = await db.query('SELECT id_pokemon, nombre_pokemon, descripcion_pokemon FROM pokemon ')
        res.json(AllPokemon.rows)
    }catch(error){
        next(error)
    }
}

const getPokemon = async (req, res, next)=>{
    try{
        const {id } = req.params
        const OnePokemon = await db.query('SELECT id_pokemon, nombre_pokemon, descripcion_pokemon,'+
        'altura_pokemon, peso_pokemon FROM pokemon '+
        'WHERE id_pokemon = $1 ',[id])
        
        if(OnePokemon.rows.length === 0){
            return res.status(404).json({
                message:'Pokemon no encontrado'
            })
        }
        res.json(OnePokemon.rows[0])
    }
    catch(error){
        next(error)
    }
}

const getPokemonTipo = async (req , res, next) =>{
    try{
        const {id } = req.params
        const tipo = await db.query('SELECT nombre_tipo FROM pokemon '+
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
        const tipo = await db.query('SELECT nombre_habilidad FROM pokemon '+
        'INNER JOIN habilidad_pokemon h ON id_pokemon = h.pokemon_id_pokemon '+
        'INNER JOIN habilidad ON h.habilidad_id_habilidad = id_habilidad '+
        'WHERE id_pokemon = $1 ',[id])
        res.json(tipo.rows)
    }catch(error){
        next(error)
    }
}


module.exports ={
    getAllPokemon,
    getPokemon,
    getPokemonTipo,
    getPokemonHabilidad
}
