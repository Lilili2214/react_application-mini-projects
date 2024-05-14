import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice";
// import selector

export default function Card({ id }) {
  const card = useSelector(selectCardById); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);
  console.log(card)
  let cardd= card[id]
  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? cardd.back : cardd.front}
      </button>
    </li>
  );
}
