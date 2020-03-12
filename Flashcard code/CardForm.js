import React from "react";
import { Form } from "semantic-ui-react"

export default class CardForm extends React.Component {
  state = {
    front: "",
    back: "",
    correct: 0,
    wrong: 0,
    showBack: false
  };
  handleSubmit = e => {
    e.preventDefault()
    this.props.addCard(this.state)
    this.setState({
      front: "",
      back: "",
      correct: 0,
      wrong: 0,
      showBack: false
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Input
          required
          label="front"
          name="front"
          placeholder="card question"
          value={this.state.front}
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
          required
          label="back"
          name="back"
          placeholder="card answer"
          value={this.state.back}
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      );
    }
  }
