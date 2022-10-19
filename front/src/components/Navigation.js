import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  
  const navigate = useNavigate()
  const main = () =>{
    navigate(`/`)
  }
  
  return (
    <div>
      <Navbar className='nav' collapseOnSelect  expand='sm' variant='primary' >
        <Container>
          <Navbar.Brand onClick={()=>main()}>
            <img
              src="/logo_transparent.png"
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href='/'>Pokédex</Nav.Link>
              <Nav.Link href='/'>About</Nav.Link>
              <Nav.Link href='/'>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
