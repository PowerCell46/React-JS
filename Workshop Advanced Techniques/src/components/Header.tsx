import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { logoutHandler } from "../controllers/authController";


export default function Header() {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();
  
    return (
        <header>
          <Link id="logo" to="/"
            ><img id="logo-img" src="./images/logo2.png" alt="logo"/>
          </Link>
        <nav>
          <div>
            <Link to="/dashboard">Solutions</Link>
          </div>

          {isAuthenticated ? 
            <div className="user">
              <Link to="/create">Add Solution</Link>
              <Link onClick={(event) => logoutHandler(event, setIsAuthenticated, navigate)} to="/">Logout</Link>
            </div>  
          :
            <div className="guest">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          }
        </nav>
      </header>
    );
}