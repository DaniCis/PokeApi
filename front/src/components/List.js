import { useEffect, useState } from "react"
import pokemonList from '../apis/pokemonApi'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function List() {

  const [pokemons,setPokemons] = useState([])
   
  useEffect(()=>{
    async function getPokemons(){
      try{
        const response = await pokemonList.get("/");
        setPokemons(response.data)
        console.log(response.data)
      }catch(err){
      }
    }
    getPokemons()
  },[])

  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-4">
        {pokemons.map((pokemon, i) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={pokemon.imagen_pokemon} />
              <Card.Body>
                <Card.Title>{pokemon.nombre_pokemon}</Card.Title>
                <Card.Text>{pokemon.descripcion_pokemon}</Card.Text>
                <Button variant="info" size='sm'>Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
