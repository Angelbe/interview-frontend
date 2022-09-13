import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
//1. Call this API (https://rickandmortyapi.com/api/character) when you click this button
//2. Fetch all data on first render and save it on state.

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

    console.log(characters);

    return (
        <div className="App">
            <button onClick={getCharacters}>cal API</button>
        </div>
    );
}
