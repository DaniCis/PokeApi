import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { Button, Card,Row, Col, Container } from 'react-bootstrap'
import pokemonApi from '../api/pokemonApi'

export default function Pokemon() {

  const {id} = useParams()
  //const navigate = useNavigate()
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [pokemonType, setPokemonType] = useState([])
  const [pokemonAbility, setPokemonAbility] = useState([])
  const [isEvolved, setEvolved] = useState(false)
  
  let evoluciones = []

  useEffect(()=>{
    getPokemonDetail(id)
    getPokemonType(id)
    getPokemonAbility(id)
    verificarEvolucion(id)
  },[id])

  async function getPokemonDetail(id){
    try{
      const response = await pokemonApi.get(`/pokemon/${id}`)
      setPokemonDetail(response.data[0])
      setEvolved(response.data[0].evolucion_pokemon)
    }catch(err){
      console.log(err.message)
    }
  }

  async function verificarEvolucion(id){
    try{
      if(isEvolved){
        evoluciones.push(pokemonDetail)
      }
      console.log(evoluciones)
    }catch(err){
      console.log(err.message)
    }
  }
  async function getPokemonType(id){
    try{
      const response = await pokemonApi.get(`/type/${id}`)
      setPokemonType(response.data)
    }catch(err){
      console.log(err.message)
    }
  }

  async function getPokemonAbility(id){
    try{
      const response = await pokemonApi.get(`/ability/${id}`)
      setPokemonAbility(response.data)
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <div>
      <Container>
        <Container>
            <Card>
              <Row>
                <Col>
                  <Card.Title>{pokemonDetail.nombre_pokemon}  #{pokemonDetail.id_pokemon}</Card.Title>
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='6'>
                  <Card.Img className='card-img' variant="top" src={pokemonDetail.imagen_pokemon} />
                </Col>
                <Col xs='12' md='6'>
                  <Card.Body>
                    <Card.Text>{pokemonDetail.descripcion_pokemon}</Card.Text>
                    <Row>
                      <Col>
                        <p>Height:&nbsp;
                          <span>{pokemonDetail.altura_pokemon}m.</span>
                        </p>
                      </Col>
                      <Col>
                        <p>Weight:&nbsp;
                          <span>{pokemonDetail.peso_pokemon}kg.</span>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <p>Type:</p>
                      <div>
                        {pokemonType.map((pokemon, key) => (
                          <p key={pokemon.id_tipo} className={`badge-type background-${pokemon.nombre_tipo}`}>{pokemon.nombre_tipo}</p>
                        ))}
                      </div>
                    </Row>
                    <Row>
                      <p>Ability:</p>
                      <ul>
                        {pokemonAbility.map((pokemon, key) => (
                          <li key={pokemon.id_habilidad}>{pokemon.nombre_habilidad}</li>
                        ))}
                      </ul>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
        </Container>
        {isEvolved ? (
        <Container>
          <h3>Evolutions</h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="card">
                <Card.Img className='card-img' variant="top" src={pokemonDetail.imagen_pokemon} />
                <Card.Body>
                  <Card.Title className="card-title">{pokemonDetail.nombre_pokemon}</Card.Title>
                  <div className="card-body-btn">
                    <Button className='card-btn' >Ver Detalles</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        ) : (
          <p>no evoluciona</p>  
        )}
      </Container>
    </div>
  )
}
