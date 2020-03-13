import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const FlashCard = ({
  deleteVirus,
  name,
  description,
  id,
  toggleEdit,
  showBack,
  wrong,
  correct,
  toggleAnswer,
  edit,
  renderEditForm
}) => (
  <>
    <Card>
      <Card.Content onClick={() => toggleAnswer(id)}>
        <Card.Header>{name}</Card.Header>
        {showBack ? <Card.Header>{description}</Card.Header> : null}
      </Card.Content>
      <Card.Content extra>
        <Button color="purple" onClick={() => toggleAnswer(id)}>
          {showBack ? "Show Less" : "Show More"}
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Button color="red" onClick={() => deleteVirus(id)}>
          delete
        </Button>
        <Button color="blue" onClick={() => toggleEdit()}>
          edit
        </Button>
        {edit ? renderEditForm() : null}
      </Card.Content>
    </Card>
  </>
);

export default FlashCard;
