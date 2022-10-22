import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowLeftShort, Icon1Circle, Icon3Circle, Icon2Circle } from 'react-bootstrap-icons'
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
  },[])

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
      console.log(pokemonEvolution)
      var temporal  = removeDuplicates(pokemonEvolution, "id_pokemon")
      setPokemonEvolution(temporal)
      console.log(temporal)
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
      <Container className='detail-container'>
        <div>
          <Link to='/'>
            <ArrowLeftShort className='arrow' color="orange" size={26}/>
            <span>back</span>
          </Link>
        </div>
        <Container className='detail-card'>
          <h3>{pokemonDetail.nombre_pokemon}  #{pokemonDetail.id_pokemon}</h3>
            <Card>
              <Row>
                <Col xs='12' md='6'>
                  <Card.Img className='card-img' variant="top" src={pokemonDetail.imagen_pokemon} />
                </Col>
                <Col xs='12' md='6'>
                  <Card.Body>
                    <Card.Text>{pokemonDetail.descripcion_pokemon}</Card.Text>
                    <Row>
                      <Col>
                        <p className='detail-att'>Height:&nbsp;
                          <span>{pokemonDetail.altura_pokemon}m.</span>
                        </p>
                      </Col>
                      <Col>
                        <p className='detail-att'>Weight:&nbsp;
                          <span>{pokemonDetail.peso_pokemon}kg.</span>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <p className='detail-att'>Type:</p>
                      <div>
                        {pokemonType.map((pokemon, key) => (
                          <p key={pokemon.id_tipo} className={`badge-type background-${pokemon.nombre_tipo}`}>{pokemon.nombre_tipo}</p>
                        ))}
                      </div>
                    </Row>
                    <Row>
                      <p className='detail-att'>Abilities:</p>
                      <ul>
                        {pokemonAbility.map((pokemon, key) => (
                          <li className='detail-list' key={pokemon.id_habilidad}>{pokemon.nombre_habilidad}</li>
                        ))}
                      </ul>
                    </Row>
                    {isEvolved === false && (
                      <Row>
                        <p className='detail-att'>Pokemon with no evolutions</p>
                      </Row>
                    )}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
        </Container>
        {isEvolved === true &&
          <Container>
            <h3>Evolutions</h3>
            <Row xs={1} md={2} lg={4} className="g-4 evolution">
              {pokemonEvolution.map((pokemon, key) => (
                <div className='evolve-card' key={pokemon.id_pokemon}>
                  <Col>
                  { key+1 === 1 && <Icon1Circle size={30} color='orange'></Icon1Circle>}
                  { key+1 === 2 && <Icon2Circle size={30} color='orange'></Icon2Circle>}
                  { key+1 === 3 && <Icon3Circle size={30} color='orange'></Icon3Circle>}
                  <Card className="card">
                    <Link to={`/pokemon/${pokemon.id_pokemon}`}>
                      <Card.Img className='card-img' variant="top" src={pokemon.imagen_pokemon} />
                    </Link>
                    <Card.Body>
                      <Card.Title className="card-title">{pokemon.nombre_pokemon}</Card.Title>
                      <Link to={`/pokemon/${pokemon.id_pokemon}`}>
                      <div className="card-body-btn">
                        <Button className='card-btn' >Ver Detalles</Button>
                      </div>
                      </Link>
                    </Card.Body>
                  </Card>
                  </Col>
                </div>
              ))}
            </Row>
          </Container>
        }    
      </Container>
    </div>
  )
}
