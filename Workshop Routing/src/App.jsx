import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Register from "./components/Register"
import Login from "./components/Login"
import { useEffect, useState } from "react"
import { isUserAuthenticated } from "./utils/authUtils"
import Home from "./components/Home"
import Create from "./components/Create"
import { getAllGames } from "./controllers/gamesController"
import Details from "./components/Details"
import Catalogue from "./components/Catalogue"
import Edit from "./components/Edit"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    setIsAuthenticated(isUserAuthenticated());

    getAllGames()
    .then(data => setGames(data))
    .catch(err => console.error(err));
  },
  []);

  return (
    <>
        <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>

        <main id="main-content">
          <Routes>        

          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>

          <Route path="/" element={<Home games={games} />} />
          <Route path="/catalogue" element={<Catalogue games={games}/>}/>
          
          <Route path="/create" element={<Create setGames={setGames}/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/edit/:id" element={<Edit setGames={setGames}/>}/>
          {/* <Route path="/delete/:id" element={<De} */}

          </Routes>
        </main>
    
    </>
  )
}

export default App
