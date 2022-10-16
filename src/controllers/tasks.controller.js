const db = require('../database')

const getAllPokemon = async (req,res)=>{
    res.send('Listado de pokemon')
     /*const result = await db.query('Select NOW()')
     console.log(result)
     res.json(result.rows[0].now)*/
}

const getPokemon = async (req,res)=>{
    res.send('un solo pokemon')
}
module.exports ={
    getAllPokemon,
    getPokemon
}
