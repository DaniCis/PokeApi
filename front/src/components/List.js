import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import pokemonApi from '../api/pokemonApi'
import { Card, Col, Row, Button, Form, Stack, Container, Toast, ToastContainer } from "react-bootstrap"

export default function List() {

  const [pokemons,setPokemons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [validated, setValidated] = useState(true);

  useEffect(()=>{
    getPokemons()
  },[])

  async function getPokemons(){
    try{
      const response = await pokemonApi.get("/pokemon/principal/")
      setPokemons(response.data)
    }catch(err){
      console.log(err.message)
    }
  }

  async function search(name){
    try{
      const response = await pokemonApi.get(`/pokemon/search/${name}`)
      setPokemons(response.data)
      console.log(response.data)
    }catch(e){
      console.log(e.message)
    }
  }

  const searchPokemon = () => {
    if(searchName !== ''){
      search(searchName)
      setValidated(true)
    }
    else
      setValidated(false)
  }

  const clearSearch = () => {
    setSearchName('')
    getPokemons()
  }
  

  return (
    <div>
      <Container className="header-container">
        <h3>Poke Api Challenge</h3>
        <span>All the information from all Pokemon in the world in just one place!</span>
      </Container>
      <Container className='search-container'>
        <Stack className='search' direction="horizontal" gap={3}>
            <Form.Group>
              <Form.Control className="me-auto" placeholder="Search for pokemon" onChange={(e) => setSearchName(e.target.value)} value={searchName}/>
            </Form.Group>
            <ToastContainer position="top-end" className="p-3">
              <Toast bg='danger' onClose={() => setValidated(true)} show={!validated} delay={2000} autohide>
                <Toast.Header>
                  <strong className="me-auto">ERROR</strong>
                </Toast.Header>
                <Toast.Body>Field required to search!</Toast.Body>
              </Toast>
            </ToastContainer>
            <Button variant="secondary" onClick={() => {searchPokemon() }}>Search</Button>
            <div className="vr" />
            <Button variant="outline-danger"  onClick={() => {clearSearch()}}>Clear</Button>
        </Stack>
      </Container>
      {pokemons.length > 0 && 
        <Container className="card-container">
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
      }
      {pokemons.length == 0 && 
        <Container className="no-container">
          <Row>
            <Col className="no-results">
              <img src='https://brandora.de/images/package_not_found.png'/>
              <h4>No results found</h4>
              <p>We couldn't find what you're looking for.</p>
              <Button variant="warning"  onClick={() => {clearSearch()}}>Go back</Button>
            </Col>
          </Row>
        </Container>
      }
    </div>
  )
}
