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
  toggleAnswer
}) => (
  <>
    <Card>
      <Card.Content onClick={() => toggleAnswer(id)}>
        <Card.Header>{name}</Card.Header>
        {showBack ? <Card.Header>{description}</Card.Header> : null}
        {/* <Card.Meta>Number of Times Correct:{correct}</Card.Meta>
        <Card.Meta>Number of Times Incorrect:{wrong}</Card.Meta> */}
      </Card.Content>
      <Card.Content extra>
        <Button color="purple" onClick={() => toggleAnswer(id)}>
          {showBack ? "Show Less" : "Show More"}
        </Button>
        {/* {console.log(toggleAnswer)} */}
        {/* {console.log(id)} */}
      </Card.Content>
      {/* <Card.Content extra>
        <Button color="green">Correct</Button>
        <Button color="red">Incorrect</Button>
      </Card.Content> */}
      <Card.Content extra>
        <Button color="red" onClick={() => deleteVirus(id)}>
          delete
        </Button>
        {/* <Button color="blue" onClick={() => toggleEdit(id)}>
          edit
        </Button> */}
      </Card.Content>
    </Card>
  </>
);

export default FlashCard;
