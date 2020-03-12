import React from "react";
import FlashCard from "./card"
import { Body } from "semantic-ui-react"


const FlashCards = props => (
  <>
    {props.cards.map(card => (
      <FlashCard
        deleteCard={props.delete}
        toggleEdit = {props.toggleEdit}
        key={`card-id ${card.id}`}
        toggleAnswer={props.toggleAnswer}
        {...card}
      />
    ))}
    {console.log(props)}
  </>
);

export default FlashCards