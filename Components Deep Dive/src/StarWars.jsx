import { useEffect, useState } from "react"
const BASE_URL = 'https://swapi.py4e.com/api/';

export default function StarWars() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/people`)
        .then(res => res.json())
        .then(data => {
            const fetchedCharacters = data.results;
            return Promise.all(fetchedCharacters.map(character => fetch(character.homeworld)
            .then(res => res.json())
            .then(homeworldData => ({...character, homeworld: homeworldData.name}))
            .catch(err => console.error(err))
        ))
        .then(data => {
            const characterFilmsPromises = data.map(chr => {
                const characterFilmsUrls = chr.films;
                return Promise.all(characterFilmsUrls.map(film => fetch(film)
                .then(res => res.json())
                .then(filmData => {
                    return filmData.title;
                })
                .catch(err => console.error(err))
            ))
            .then(films => {
                chr.films = films;
                return chr;
            })
            })
            return Promise.all(characterFilmsPromises);
        })
        .then(chrs => {
            console.log(chrs);
            setCharacters(chrs)})
        })
        .catch(err => console.error(err));

    }, []);
    
    return (
        <>
        <hr />
        <h1>Star Wars Characters</h1>
        <ul>
            {characters.map(ch => <li key={ch.url}> <br />Name: <b>{ch.name}</b> from Planet: <b>{ch.homeworld}</b>. <br />Played in: <b>{ch.films.join(", ")}</b>.</li>)}
        </ul>
        </>
    )
}