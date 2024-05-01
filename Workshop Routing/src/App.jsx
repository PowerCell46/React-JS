import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Register from "./components/Register"
import Login from "./components/Login"
import { useEffect, useState } from "react"
import { isUserAuthenticated } from "./utils/authUtils"
import Home from "./components/Home"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(isUserAuthenticated());
  },
  []);

  return (
    <>
        <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>

    <main id="main-content">
      <Routes>        

      <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}/>}/>
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
      <Route path="/" element={<Home/>}


      </Routes>
    </main>
    
    </>
  )
}

export default App
