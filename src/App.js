import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
//1. Call this API (https://rickandmortyapi.com/api/character) when you click this button
//2. Fetch all data on first render and save it on state.
//3. create a Card component with name, gender and an image of the character, pass it one character and put it in the middle of the screen.
//4. Create a row of 4 cards
//5. Now create a grid/table of 3 rows and 4 columns with 12 characters

const getCharacters = () => {
    return axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

export default function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then((response) => {
            setCharacters(response.results);
        });
    }, []);

    return (
        <div className="App">
            <div className="CardContainer">
                {characters.slice(0, 12).map((character) => (
                    <Card key={character.name} character={character} />
                ))}
            </div>
        </div>
    );
}
