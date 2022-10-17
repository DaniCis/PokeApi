import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect fixed='top' expand='sm' variant='primary' >
        <Container>
          <Navbar.Brand>Poke Api</Navbar.Brand>
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
