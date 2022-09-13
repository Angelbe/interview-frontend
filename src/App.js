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
//8. Add pagination of max 20 characters

const getCharacters = (page) => {
  return axios
    .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersModified, setCharactersModified] = useState([]);
  const [sortType, setSortType] = useState("alphabetically");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page).then((response) => {
      setCharacters(response.results.slice(0, 20));
      setCharactersModified(response.results.slice(0, 20));
    });
  }, [page]);

  useEffect(() => {
    if (sortType === "alphabetically") {
      setCharactersModified(characters.slice(0, 20).sort());
    }
    if (sortType === "unalphabetically") {
      setCharactersModified(characters.slice(0, 20).reverse());
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

  const handlePaginationClick = (pageClicked) => {
    if (pageClicked < 1 || pageClicked === page) {
      return;
    }
    setPage(pageClicked);
  };

  return (
    <div className="App">
      <button onClick={handleSortClick}> sort Characters</button>
      <div className="CardContainer">
        {charactersModified.map((character) => (
          <Card key={character.url} character={character} />
        ))}
      </div>
      <div className="PaginationContainer">
        <span onClick={() => handlePaginationClick(page - 1)}>{page - 1}</span>
        <span onClick={() => handlePaginationClick(page)}>{page}</span>
        <span onClick={() => handlePaginationClick(page + 1)}>{page + 1}</span>
      </div>
    </div>
  );
}
