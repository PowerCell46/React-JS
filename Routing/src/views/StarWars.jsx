import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
const base_url = `https://swapi.py4e.com/api`;

export function StarWars() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${base_url}/people`, {signal: abortController.signal})
        .then(res => res.json())
        .then(data => setCharacters(data.results))
        .catch(err => console.error(err));

        return () => {
            abortController.abort(); // cleanup the request on destroy
        }
    }, []);
    return (
        <ul>
            {characters.map((ch, index) => (
            <li key={ch.name}>
                {ch.name}
                <Link to={`/character/${index + 1}`} state={{ character: ch }}>
                    Details
                </Link>

            </li>
        ))}
        </ul>
    )
}
