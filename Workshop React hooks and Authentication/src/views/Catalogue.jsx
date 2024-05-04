import { useContext } from "react";
import GameContainer from "../components/GameContainer";
import { GamesContext } from "../contexts/gamesContext";


export default function Catalogue() {
    const {games} = useContext(GamesContext);
    
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        {games.length > 0 ? 
            games
            .map(game => <GameContainer key={game._id} game={game}/>) 
        : 
            <h3 className="no-articles">No articles yet</h3>
        }
    </section>
    );
}