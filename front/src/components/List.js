import { useEffect, useState } from "react"
import pokemonList from '../apis/pokemonApi'

export default function List() {

  const [pokemon,setPokemon] = useState()
   
  useEffect(()=>{
    async function getPokemon(){
      try{
        const response = await pokemonList.get("/");
        setPokemon(response.data)
        console.log(response.data)
      }catch(err){

      }
    }
    getPokemon()
  },[])

  return (
    <> Cards main</>
  )
}
