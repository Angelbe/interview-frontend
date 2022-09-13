import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
//1. Call this API (https://rickandmortyapi.com/api/character) when you click this button
//2. Fetch all data on first render and save it on state.
//3. create a Card component with name, gender and an image of the character, pass it one character and put it in the middle of the screen.
//4. Create a row of 4 cards
//5. Now create a grid/table of 3 rows and 4 columns with 12 characters
//6. create a button which sorts names by A→Z or Z→A when pressed
//7. In mobile have only two column while keeping 4 in desktop as a mobile first design

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
    const [charactersModified, setCharactersModified] = useState([]);
    const [sortType, setSortType] = useState("alphabetically");

    useEffect(() => {
        getCharacters().then((response) => {
            setCharacters(response.results.slice(0, 12));
            setCharactersModified(response.results.slice(0, 12));
        });
    }, []);

    useEffect(() => {
        if (sortType === "alphabetically") {
            setCharactersModified(characters.slice(0, 12).sort());
        }
        if (sortType === "unalphabetically") {
            setCharactersModified(characters.slice(0, 12).reverse());
        }
    }, [sortType]);

    const handleSortClick = () => {
        if (sortType === "alphabetically") {
            setSortType("unalphabetically");
        }
        if (sortType === "unalphabetically") {
            setSortType("alphabetically");
        }
    };

    return (
        <div className="App">
            <button onClick={handleSortClick}> sort Characters</button>
            <div className="CardContainer">
                {charactersModified.map((character) => (
                    <Card key={character.name} character={character} />
                ))}
            </div>
        </div>
    );
}
