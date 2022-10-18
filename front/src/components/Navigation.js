import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect  expand='sm' variant='primary' >
        <Container>
          <Navbar.Brand><img
              src="/logo_transparent.png"
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href='/'>Logo</Nav.Link>
              <Nav.Link href='/'>Hola</Nav.Link>
              <Nav.Link href='/'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
