import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const base_url = `https://swapi.py4e.com/api`;


export default function StarWarsDetails() {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); 
  const chr = location.state?.character;

  useEffect(() => {
        if (chr) {
            console.log("HAS");
            setCharacter(chr);
        } else {
            console.log("HAS NOT");
            fetch(`${base_url}/people/${id}`)
                .then(res => res.json())
                .then(data => setCharacter(data))
                .catch(err => {
                  console.error(err);
                  navigate("/404");
                });
        }
    }, []);

  return (
    <div style={{ margin: "0 auto" }}>
      <h1>{character.name}</h1>
      <p>Details: 
            hair color: {character.hair_color} <br />
            mass: {character.mass} <br />
            skin color: {character.skin_color} <br />
            eye color: {character.eye_color} <br />
            birth year: {character.birth_year} <br />
            gender: {character.gender} <br />
        </p>
    </div>
  );
}