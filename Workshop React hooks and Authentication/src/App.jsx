import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./views/Home";
import Create from "./views/Create";
import Details from "./views/Details";
import Catalogue from "./views/Catalogue";
import Edit from "./views/Edit";
import { AuthContext } from "./contexts/authContext";
import { useEffect, useState } from "react";
import { isUserAuthenticated } from "./utils/authUtils";
import { GamesContext } from "./contexts/gamesContext";
import { getAllGames } from "./controllers/gamesController";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    setIsAuthenticated(isUserAuthenticated());

    getAllGames()
    .then(data => setGames(data))
    .catch(err => console.error(err));
    
  }, []);

  return (
    <AuthContext.Provider value={{setIsAuthenticated}}>
      <GamesContext.Provider value={{games, setGames}}>
        <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <main id="main-content">
          <Routes>        
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/catalogue" element={<Catalogue/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
          </Routes>
        </main>
      </GamesContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
