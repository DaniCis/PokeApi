import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Main from './components/List'
import Pokemon from './components/Pokemon'
import Nav from './components/Navigation'
import Pokedex from './components/Pokedex'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Container>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/pokemon/:id" element={<Pokemon/>} />
          <Route path="/pokedex" element={<Pokedex/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

