import { Link } from "react-router-dom";
import { logoutHandler } from "../controllers/authController";
import { useNavigate } from "react-router-dom";


export default function Navigation({isAuthenticated, setIsAuthenticated}) {
    const navigate = useNavigate();

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/catalogue">All games</Link>
                {isAuthenticated ? 
                    <div id="user">
                        <Link to="/create">Create Game</Link>
                        <Link onClick={(event) => logoutHandler(event, setIsAuthenticated, navigate)} to="/logout">Logout</Link>
                    </div> 
                : 
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }            
            </nav>
        </header>
    );
}