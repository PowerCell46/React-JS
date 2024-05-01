import GameContainer from "../components/GameContainer";


export default function Catalogue({games}) {
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