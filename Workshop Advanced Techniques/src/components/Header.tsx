import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";


export default function Header() {
  const {isAuthenticated} = useContext(AuthContext);
  
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
              <Link to="javascript:void(0)">Logout</Link>
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