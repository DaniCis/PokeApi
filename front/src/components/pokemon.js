import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { Button, Card,Row, Col, Container,Badge } from 'react-bootstrap'
import pokemonApi from '../api/pokemonApi'

export default function Pokemon() {

  const {id} = useParams()
  //const navigate = useNavigate()
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [pokemonType, setPokemonType] = useState([])

  useEffect(()=>{
    getPokemonDetail(id)
    getPokemonType(id)
  },[])

  async function getPokemonDetail(id){
    try{
      const response = await pokemonApi.get(`/pokemon/${id}`)
      setPokemonDetail(response.data[0])
      console.log(response.data[0])
    }catch(err){
      console.log(err.message)
    }
  }

  async function getPokemonType(id){
    try{
      const response = await pokemonApi.get(`/type/${id}`)
      setPokemonType(response.data)
      console.log(response.data)
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
                      {pokemonType.map((pokemon, key) => (
                        <Col>
                          <p className={`badge-type background-${pokemon.nombre_tipo}`}>{pokemon.nombre_tipo}</p>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
        </Container>
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
      </Container>
    </div>
  )
}
