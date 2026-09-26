import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { cards, setTitle, setDescription } from "./cards";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showRandomCard = () => {
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * cards.length);
    }
    setCurrentIndex(next);
  };

  return (
    <div className="App">
      <h1>{setTitle}</h1>
      <p>{setDescription}</p>
      <p>Number of cards: {cards.length}</p>

      <Card key={cards[currentIndex].id} card={cards[currentIndex]} />

      <button onClick={showRandomCard}>Next</button>
    </div>
  );
}

export default App;