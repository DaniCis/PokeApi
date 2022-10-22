import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  
  const navigate = useNavigate()
  const main = () =>{
    navigate(`/`)
  }
  
  return (
    <div>
      <Navbar fixed="top" className='nav' collapseOnSelect  expand='sm' variant='primary' >
        <Container>
          <Navbar.Brand onClick={()=>main()}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              width="120"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse className="justify-content-end">
            <Nav className='nav-link'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/pokedex'>Pokédex</Nav.Link>
              <Nav.Link href='/'>About</Nav.Link>
              <Nav.Link href='/'>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
