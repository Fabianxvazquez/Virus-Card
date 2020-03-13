import React from "react";
import VirusCard from "./VirusCard.js";


const VirusCards = props => (
  <>
    {props.viruses.map(virus => (
      <VirusCard
        deleteVirus={props.delete}
        toggleEdit={props.toggleEdit}
        key={`virus-id ${virus.id}`}
        toggleAnswer={props.toggleAnswer}
        renderEditForm={props.renderEditForm}
        {...virus}
      />
    ))}
    {console.log(props)}
  </>
);

export default VirusCards;
