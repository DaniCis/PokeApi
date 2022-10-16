import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Main from './components/main'
import Pokemon from './components/pokemon'
import Nav from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Container>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/pokemon/new" element={<Pokemon/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

