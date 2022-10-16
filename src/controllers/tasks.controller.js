const db = require('../database')

const getAllPokemon = async (req ,res , next)=>{
    try{
        const AllPokemon = await db.query('SELECT * FROM pokemon')
        res.json(AllPokemon.rows)
    }catch(error){
        next(error)
    }
}

const getPokemon = async (req, res, next)=>{
    try{
        const {id } = req.params
        const OnePokemon = await db.query('SELECT * FROM pokemon WHERE id_pokemon = $1',[id])
        
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


module.exports ={
    getAllPokemon,
    getPokemon
}
