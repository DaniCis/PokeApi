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
  const [pokemonEvolution, setPokemonEvolution] = useState([])

  useEffect(()=>{
    getPokemonDetail(id)
    getPokemonType(id)
    getPokemonAbility(id)
    getPokemonEvolution(id)
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

  async function getPokemonEvolution(id){
    try{
      const idNuevo = parseInt(id,10)
      const response = await pokemonApi.get(`/pokemon/${idNuevo}`)
      if(response.data[0].evolucion_pokemon){
        pokemonEvolution.push(response.data[0])
        getPokemonEvolution(idNuevo+1)
      }else{
        pokemonEvolution.push(response.data[0])
      }
      var temporal  = removeDuplicates(pokemonEvolution, "id_pokemon")
      setPokemonEvolution(temporal)
    }catch(err){
      console.log(err.message)
    }
  }

  function removeDuplicates(originalArray, prop) {
    var newArr = [];
    var oldArr  = {};
    for(var i in originalArray)
      oldArr[originalArray[i][prop]] = originalArray[i];
    for(i in oldArr) 
      newArr.push(oldArr[i]);
    return newArr;
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
                      <p>Abilities:</p>
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
          {pokemonEvolution.map((pokemon, key) => (
            <div className='evolve-card' key={pokemon.id_pokemon}>
              <Card className="card">
                <Card.Img className='card-img' variant="top" src={pokemon.imagen_pokemon} />
                <Card.Body>
                  <Card.Title className="card-title">{pokemon.nombre_pokemon}</Card.Title>
                  <div className="card-body-btn">
                    <Button className='card-btn' >Ver Detalles</Button>
                  </div>
                </Card.Body>
              </Card>
            <ArrowRight className='arrow' color="brown" size={96}/>
            </div>
          ))}
          </Row>
        </Container>
        ) : (
          <p>no evoluciona</p>  
        )}
      </Container>
    </div>
  )
}
