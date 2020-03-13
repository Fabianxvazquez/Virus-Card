import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export default class VirusForm extends Component {
  state = {
    name: "",
    description: "",
    showBack: false
  };
  handleSubmit = e => {
    // edit logic
    e.preventDefault();
    this.props.addVirus(this.state);
    this.setState({
      name: "",
      description: "",
      showBack: false
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            required
            label="name"
            name="name"
            placeholder="virus name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            required
            label="description"
            name="description"
            placeholder="Virus info"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
