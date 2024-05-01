import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Register from "./views/Register"
import Login from "./views/Login"
import { useEffect, useState } from "react"
import { isUserAuthenticated } from "./utils/authUtils"
import Home from "./views/Home"
import Create from "./views/Create"
import { getAllGames } from "./controllers/gamesController"
import Details from "./views/Details"
import Catalogue from "./views/Catalogue"
import Edit from "./views/Edit"


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

          </Routes>
        </main>
    </>
  );
}

export default App
