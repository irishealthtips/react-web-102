import { useState } from "react";
import "./Card.css";

function Card({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${card.category}`}
      onClick={() => setFlipped(!flipped)}
    >
      <span className="category-tag">{card.category}</span>
      {flipped ? (
        <div>
          <h2>{card.answer}</h2>
          <p>{card.description}</p>
        </div>
      ) : (
        <div>
          <h2 className="korean">{card.question}</h2>
          {card.image && (
            <img className="dish-image" src={card.image} alt="Korean dish" />
          )}
        </div>
      )}
    </div>
  );
}

export default Card;