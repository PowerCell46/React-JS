
import { Link, Route, Routes } from 'react-router-dom'
// import './App.css'
import HomeView from './views/Home'
import About from './views/About'
import Navigation from './components/Navigation'
import { StarWars } from './views/StarWars'
import StarWarsDetails from './views/StarWarsDetails'

function App() {

  return (
    <>
    <Navigation/>
      
    <h1>Routing Lecture Heading</h1>

      <Routes>
            <Route path='/' element={<HomeView/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path="/characters" element={<StarWars/>}/>
            <Route path="/character/:id" element={<StarWarsDetails/>}/>
      </Routes>

      <footer>All rights reserved</footer>
    </>
  )
}
 
export default App
