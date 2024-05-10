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
import { AuthForbidden, AuthRequired } from "./components/ProtectedRoutes"


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

              {/* Authentication */}
              <Route path="/register" element={
                            <AuthForbidden isAuthenticated={isAuthenticated}>
                                <Register setIsAuthenticated={setIsAuthenticated}/>
                            </AuthForbidden>
                            }/>

              <Route path="/login" element={
                            <AuthForbidden isAuthenticated={isAuthenticated}>
                                <Login setIsAuthenticated={setIsAuthenticated}/>
                            </AuthForbidden>
                            }/>

              {/* Main Views */}
              <Route path="/" element={<Home games={games} />} />
              <Route path="/catalogue" element={<Catalogue games={games}/>}/>
              
              {/* Games Views */}
              <Route path="/create" element={
                            <AuthRequired isAuthenticated={isAuthenticated}>
                                <Create setGames={setGames}/>
                            </AuthRequired>
                            }/>
              <Route path="/details/:id" element={<Details setGames={setGames}/>}/>
              
              <Route path="/edit/:id" element={
                            <AuthRequired isAuthenticated={isAuthenticated}>
                                <Edit setGames={setGames}/>
                            </AuthRequired>
                            }/>
          </Routes>
        </main>
    </>
  );
}

export default App
