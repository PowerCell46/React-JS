import Movie from "./Movie";
import Heading from "./Heading";


export default function MovieList(props) {
    return <div className="movie-list">
        <Heading>Some heading here...</Heading>        
        <ul>
            {props.movies.
            map(movie => 
                <Movie data={movie}/>
            )}

        </ul>
    </div>
}