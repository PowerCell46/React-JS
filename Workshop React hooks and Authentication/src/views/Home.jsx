import { useContext } from "react";
import GameCard from "../components/GameCard";
import { GamesContext } from "../contexts/gamesContext";


export default function Home() {
    const {games} = useContext(GamesContext);
    
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.length > 0 ? 
                    games
                    // .slice(0, 3)
                    .map(game => 
                        <GameCard key={game._id} game={game}/>
                    )                    
                : 
                    <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    );
}