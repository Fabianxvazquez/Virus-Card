import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const VirusCard = ({
  deleteVirus,
  name,
  description,
  id,
  toggleEdit,
  showBack,
  toggleAnswer,
}) => (
  <>
    <Card>
      <Card.Content onClick={() => toggleAnswer(id)}>
        <Card.Header>{name}</Card.Header>
        {showBack ? <Card.Header>{description}</Card.Header> : null}
      </Card.Content>
      <Card.Content extra>
        <Button color="blue" onClick={() => toggleAnswer(id)}>
          {showBack ? "Show Less" : "Show More"}
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Button color="red" onClick={() => deleteVirus(id)}>
          Delete Virus
        </Button>
        <Button color="blue" onClick={() => toggleEdit(id)}>
          edit
        </Button>
      </Card.Content>
    </Card>
  </>
);

export default VirusCard;
