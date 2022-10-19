import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import pokemonApi from '../api/pokemonApi'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Container } from "react-bootstrap";

export default function List() {

  const navigate = useNavigate()
  const [pokemons,setPokemons] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(()=>{
    async function getPokemons(){
      try{
        const response = await pokemonApi.get("/pokemon/principal/")
        setPokemons(response.data)
        //console.log(response.data)
      }catch(err){
        console.log(err.message)
      }
    }
    getPokemons()
  },[])

  async function search(name){
    try{
      const response = await pokemonApi.get(`/pokemon/search/${name}`)
      setPokemons(response.data)
    }catch(e){
      console.log(e.message)
    }
  }
  
  const selectPokemon = (id) => {
    navigate(`/pokemon/${id}`)
  }

  const searchPokemon = () => {
    search(searchName)
  }

  


  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Search for pokemon" onChange={(e) => setSearchName(e.target.value)} />
        <Button variant="secondary" onClick={() => {searchPokemon()}}>Search</Button>
        <div className="vr" />
        <Button variant="outline-danger">Clear</Button>
      </Stack>

      <Container className="card-container">
        <Row xs={1} md={2} lg={4} className="g-4">
          {pokemons.map((pokemon, key) => (
            <Col key={pokemon.id_pokemon}>
              <Card className="card">
                <Card.Img className='card-img' variant="top" src={pokemon.imagen_pokemon} />
                <Card.Body>
                  <Card.Title className="card-title">{pokemon.nombre_pokemon}</Card.Title>
                  <Card.Text className="card-text">{pokemon.descripcion_pokemon}</Card.Text>
                  <div className="card-body-btn">
                    <Button className='card-btn' onClick={()=>selectPokemon(pokemon.id_pokemon)} >Ver Detalles</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
