import "./styles.css";

//1. Call this API (https://rickandmortyapi.com/api/character) when you click this button

export default function App() {
  return (
      <div className="App">
        <button onClick={getCharacters}>cal API</button>
      </div>
  );
}
