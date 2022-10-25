import { useState, useEffect } from 'react'
import { Button, Card,Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pokemonApi from '../api/pokemonApi'

export default function Pokedex() {

  const [pokemons,setPokemons] = useState([])

  useEffect(()=>{
    getPokemons()
  },[])
  
  async function getPokemons(){
    try{
      const response = await pokemonApi.get("/pokemon")
      setPokemons(response.data)
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <div>
      <Container className="pokedex-container card-container">
      <h3>Pokédex</h3>
        <Row xs={1} md={2} lg={4} className="g-4">
          {pokemons.map((pokemon, key) => (
            <Col key={pokemon.id_pokemon}>
              <Card className="card">
                <Link to={`/pokemon/${pokemon.id_pokemon}`}>
                  <Card.Img className='card-img' variant="top" src={pokemon.imagen_pokemon} />
                </Link>
                <Card.Body>
                  <Card.Title className="card-title">{pokemon.nombre_pokemon} #{pokemon.id_pokemon}</Card.Title>
                  <Card.Text className="card-text">{pokemon.descripcion_pokemon}</Card.Text>
                  <Link to={`/pokemon/${pokemon.id_pokemon}`}>
                    <div className="card-body-btn">
                      <Button className='card-btn'>Ver Detalles</Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Container>
    </div>
  )
}
