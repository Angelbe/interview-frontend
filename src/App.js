import "./styles.css";
import axios from "axios";
//1. Call this API (https://rickandmortyapi.com/api/character) when you click this button

const getCharacters = () => {
    return axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

export default function App() {
    return (
        <div className="App">
            <button onClick={getCharacters}>cal API</button>
        </div>
    );
}
