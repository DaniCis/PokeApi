import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import pokemonApi from '../api/pokemonApi'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pokemon() {

  const {id} = useParams()
  //const navigate = useNavigate()
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    async function getPokemon(){
      try{
        const response = await pokemonApi.get(`/pokemon/${id}`);
        setPokemon(response.data)
        console.log(response.data)
      }catch(err){
        console.log(err.message)
      }
    }
    getPokemon()
  },[])


  return (
    <div>
      <Container>
        <Row>
          <Col md='6'>
          <p>{pokemon[0].nombre_pokemon}</p>
          <img src={pokemon[0].imagen_pokemon} alt={pokemon[0].nombre_pokemon}></img>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>

    </div>
  )
}
